import { ToolDecorator as Tool, Widget, ExecutionContext, z } from '@nitrostack/core';

export class MarketIntelligenceTools {
  @Tool({
    name: 'get_market_insights',
    description: 'Retrieve latest market insights and financial headlines.',
    inputSchema: z.object({
      category: z.enum(['Markets', 'Economy', 'Corporate', 'Tech']).optional().default('Markets').describe('News category'),
      limit: z.number().optional().default(3).describe('Number of headlines to retrieve')
    }),
    examples: {
      request: {
        category: 'Markets',
        limit: 2
      },
      response: {
        category: 'Markets',
        headlines: [
          { category: 'Markets', title: 'S&P 500 Reaches New All-Time High Amid Tech Rally', impact: 'Positive' },
          { category: 'Markets', title: 'Treasury Yields Stabilize as Inflation Data Meets Expectations', impact: 'Neutral' }
        ],
        marketSentiment: 'Bullish',
        topGainers: ['NVDA', 'AAPL', 'MSFT'],
        topLosers: ['TSLA', 'NKE']
      }
    }
  })
  @Widget('market-intelligence-result')
  async getMarketInsights(input: any, ctx: ExecutionContext) {
    ctx.logger.info('Retrieving market insights', input);

    const { category, limit } = input;

    const mockHeadlines = [
      { category: 'Markets', title: 'S&P 500 Reaches New All-Time High Amid Tech Rally', impact: 'Positive' },
      { category: 'Markets', title: 'Treasury Yields Stabilize as Inflation Data Meets Expectations', impact: 'Neutral' },
      { category: 'Economy', title: 'Fed Signals Potential Rate Cut in Upcoming Quarter', impact: 'Positive' },
      { category: 'Economy', title: 'Global Supply Chain Bottlenecks Easing, IMF Reports', impact: 'Positive' },
      { category: 'Corporate', title: 'Major EV Manufacturer Announces Expansion into Energy Storage', impact: 'Positive' },
      { category: 'Tech', title: 'New AI Regulations Proposed by EU Council', impact: 'Neutral' }
    ];

    const filtered = mockHeadlines
      .filter(h => h.category === category)
      .slice(0, limit);

    return {
      category,
      headlines: filtered,
      marketSentiment: 'Bullish',
      topGainers: ['NVDA', 'AAPL', 'MSFT'],
      topLosers: ['TSLA', 'NKE']
    };
  }
}
