import { ToolDecorator as Tool, Widget, ExecutionContext, z } from '@nitrostack/core';

export class RiskTools {
  @Tool({
    name: 'assess_risk',
    description: 'Evaluate the risk profile of an investment portfolio based on asset allocation and concentration.',
    inputSchema: z.object({
      holdings: z.array(z.object({
        asset: z.string().describe('Asset name or symbol'),
        category: z.enum(['Equity', 'Debt', 'Gold', 'Cash']).describe('Asset category'),
        value: z.number().positive().describe('Current value of the holding')
      })).describe('List of portfolio holdings')
    }),
  })
  @Widget('risk-result')
  async assessRisk(input: any, ctx: ExecutionContext) {
    ctx.logger.info('Assessing risk', input);

    const { holdings } = input;
    const totalValue = holdings.reduce((sum: number, h: any) => sum + h.value, 0);
    
    const allocation = {
      Equity: 0,
      Debt: 0,
      Gold: 0,
      Cash: 0
    };

    holdings.forEach((h: any) => {
      allocation[h.category as keyof typeof allocation] += (h.value / totalValue) * 100;
    });

    let riskScore = allocation.Equity; // Primary risk driver
    let riskLevel = 'Moderate';

    if (riskScore > 75) riskLevel = 'High';
    else if (riskScore < 30) riskLevel = 'Low';

    const alerts = [];
    if (allocation.Equity > 85) alerts.push('Very high equity exposure may lead to significant volatility.');
    if (allocation.Debt < 10 && riskScore > 50) alerts.push('Low debt cushion; consider increasing fixed income allocation.');
    
    // Concentration check
    const topHolding = [...holdings].sort((a, b) => b.value - a.value)[0];
    if (topHolding && (topHolding.value / totalValue) > 0.2) {
      alerts.push(`High concentration in ${topHolding.asset} (${Math.round((topHolding.value / totalValue) * 100)}%). Diversify to reduce idiosyncratic risk.`);
    }

    return {
      riskScore: Math.round(riskScore),
      riskLevel,
      allocation: Object.fromEntries(Object.entries(allocation).map(([k, v]) => [k, Math.round(v)])),
      alerts,
      summary: `Your portfolio has a ${riskLevel.toLowerCase()} risk profile with ${Math.round(allocation.Equity)}% equity exposure.`
    };
  }
}

