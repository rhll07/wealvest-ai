import { ToolDecorator as Tool, Widget, ExecutionContext, z } from '@nitrostack/core';
import { calculateFV } from '../../utils/financial.js';

export class InvestmentSimulatorTools {
  @Tool({
    name: 'simulate_investment',
    description: 'Simulate the growth of SIP or lump-sum investments over time with deterministic financial calculations.',
    inputSchema: z.object({
      initialInvestment: z.number().nonnegative().describe('Initial lump-sum investment amount'),
      monthlySIP: z.number().nonnegative().describe('Monthly SIP amount'),
      expectedReturn: z.number().positive().describe('Expected annual return rate (percentage)'),
      duration: z.number().min(1).max(50).describe('Duration of investment in years'),
      inflationAdjusted: z.boolean().default(false).describe('Whether to adjust results for inflation')
    }),
    examples: {
      request: {
        initialInvestment: 100000,
        monthlySIP: 10000,
        expectedReturn: 12,
        duration: 10
      },
      response: {
        finalCorpus: 2623456,
        totalInvested: 1300000,
        totalReturns: 1323456,
        yearlyProjections: [
          { year: 1, balance: 234000, invested: 220000 },
          // ... more years
        ],
        comparison: {
          withInflation: 1850000,
          at8Percent: 2100000,
          at15Percent: 3200000
        }
      }
    }
  })
  @Widget('investment-simulator-result')
  async simulateInvestment(input: any, ctx: ExecutionContext) {
    ctx.logger.info('Simulating investment growth', input);

    const {
      initialInvestment,
      monthlySIP,
      expectedReturn,
      duration,
      inflationAdjusted
    } = input;

    const annualRate = expectedReturn / 100;
    const monthlyRate = annualRate / 12;
    const inflationRate = 0.06; // Standard 6% inflation for comparison
    
    let currentBalance = initialInvestment;
    let totalInvested = initialInvestment;
    const yearlyProjections = [];

    for (let year = 1; year <= duration; year++) {
      for (let month = 1; month <= 12; month++) {
        currentBalance = (currentBalance + monthlySIP) * (1 + monthlyRate);
        totalInvested += monthlySIP;
      }
      
      yearlyProjections.push({
        year,
        balance: Math.round(currentBalance),
        invested: Math.round(totalInvested),
        returns: Math.round(currentBalance - totalInvested)
      });
    }

    const finalCorpus = Math.round(currentBalance);
    const totalReturns = finalCorpus - totalInvested;

    // Comparisons
    const comparison = {
      at8Percent: calculateFV(initialInvestment, monthlySIP, 0.08, duration),
      at15Percent: calculateFV(initialInvestment, monthlySIP, 0.15, duration),
      inflationAdjusted: Math.round(finalCorpus / Math.pow(1 + inflationRate, duration))
    };

    return {
      finalCorpus,
      totalInvested,
      totalReturns,
      yearlyProjections,
      comparison,
      parameters: {
        expectedReturn,
        duration,
        monthlySIP,
        initialInvestment
      }
    };
  }
}

