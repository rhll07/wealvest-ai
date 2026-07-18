import { ToolDecorator as Tool, Widget, ExecutionContext, z } from '@nitrostack/core';

export class PortfolioTools {
  @Tool({
    name: 'analyze_portfolio',
    description: 'Analyze an investment portfolio based on investor profile and financial goals.',
    inputSchema: z.object({
      age: z.number().min(18).max(100).describe('Investor age'),
      monthlyIncome: z.number().positive().describe('Monthly income'),
      monthlyInvestment: z.number().positive().describe('Amount invested every month'),
      currentSavings: z.number().nonnegative().describe('Current savings'),
      riskTolerance: z.enum(['Low', 'Medium', 'High']).describe('Risk tolerance'),
      investmentHorizon: z.number().min(1).max(50).describe('Investment horizon in years'),
      financialGoal: z.string().describe('Primary financial goal (e.g., Retirement, Buying a Home)')
    }),
    examples: {
      request: {
        age: 30,
        monthlyIncome: 100000,
        monthlyInvestment: 30000,
        currentSavings: 1000000,
        riskTolerance: 'High',
        investmentHorizon: 20,
        financialGoal: 'Early Retirement'
      },
      response: {
        portfolioScore: 85,
        riskScore: 70,
        recommendedAllocation: {
          equity: 75,
          debt: 20,
          gold: 5
        },
        expectedCAGR: 12.5,
        projectedCorpus: 45000000,
        emergencyFundAnalysis: {
          status: 'Adequate',
          current: 1000000,
          required: 600000
        },
        recommendations: [
          'Increase equity exposure given the long horizon.',
          'Consider diversified index funds.'
        ],
        warnings: [],
        insights: 'Your savings rate is excellent relative to your income.'
      }
    }
  })
  @Widget('portfolio-result')
  async analyzePortfolio(input: any, ctx: ExecutionContext) {
    ctx.logger.info('Analyzing portfolio', input);

    const {
      age,
      monthlyIncome,
      monthlyInvestment,
      currentSavings,
      riskTolerance,
      investmentHorizon,
    } = input;

    // Deterministic Logic for Portfolio Analysis
    
    // 1. Recommended Allocation (Rule of thumb: 100 - age for equity, adjusted by risk tolerance)
    let equityBase = 100 - age;
    if (riskTolerance === 'High') equityBase += 10;
    if (riskTolerance === 'Low') equityBase -= 15;
    
    const equity = Math.max(20, Math.min(90, equityBase));
    const gold = 10;
    const debt = 100 - equity - gold;

    // 2. Expected CAGR (Approximate based on allocation)
    // Equity: 12%, Debt: 7%, Gold: 8%
    const expectedCAGR = (equity * 0.12 + debt * 0.07 + gold * 0.08);

    // 3. Projected Corpus (Future Value of SIP + Lumpsum)
    // FV = P * (1 + r)^n + PMT * [((1 + r)^n - 1) / r] * (1 + r)
    const r = expectedCAGR / 12;
    const n = investmentHorizon * 12;
    const p = currentSavings;
    const pmt = monthlyInvestment;

    const fvLumpsum = p * Math.pow(1 + r, n);
    const fvSIP = pmt * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const projectedCorpus = Math.round(fvLumpsum + fvSIP);

    // 4. Emergency Fund Analysis (Recommend 6 months of expenses, assuming 60% of income is expense)
    const monthlyExpense = monthlyIncome * 0.6;
    const requiredEmergencyFund = monthlyExpense * 6;
    const emergencyFundStatus = currentSavings >= requiredEmergencyFund ? 'Adequate' : 'Insufficient';

    // 5. Portfolio Score (Simple heuristic)
    let portfolioScore = 70;
    if (monthlyInvestment / monthlyIncome >= 0.2) portfolioScore += 10;
    if (emergencyFundStatus === 'Adequate') portfolioScore += 10;
    if (investmentHorizon >= 10) portfolioScore += 10;
    portfolioScore = Math.min(100, portfolioScore);

    // 6. Risk Score
    let riskScore = equity;
    if (riskTolerance === 'High') riskScore += 5;
    if (riskTolerance === 'Low') riskScore -= 5;
    riskScore = Math.max(0, Math.min(100, riskScore));

    const recommendations = [
      `Maintain an asset allocation of ${equity}% Equity, ${debt}% Debt, and ${gold}% Gold.`,
      investmentHorizon > 15 ? 'Given your long horizon, you can afford higher volatility for better returns.' : 'Since your horizon is shorter, focus on wealth preservation.',
      monthlyInvestment / monthlyIncome < 0.2 ? 'Try to increase your monthly investment to at least 20% of your income.' : 'Your savings rate is healthy.'
    ];

    const warnings = [];
    if (emergencyFundStatus === 'Insufficient') {
      warnings.push(`Emergency fund is insufficient. Target at least ${requiredEmergencyFund.toLocaleString()} (6 months of expenses).`);
    }

    return {
      portfolioScore,
      riskScore,
      recommendedAllocation: {
        equity,
        debt,
        gold
      },
      expectedCAGR: Number(expectedCAGR * 100).toFixed(1),
      projectedCorpus,
      emergencyFundAnalysis: {
        status: emergencyFundStatus,
        current: currentSavings,
        required: requiredEmergencyFund
      },
      recommendations,
      warnings,
      insights: `Based on your ${riskTolerance.toLowerCase()} risk tolerance and ${investmentHorizon}-year horizon, a ${equity}/${debt}/${gold} split is recommended to optimize returns while managing volatility.`
    };
  }
}