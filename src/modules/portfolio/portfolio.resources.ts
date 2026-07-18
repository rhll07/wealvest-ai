import { ResourceDecorator as Resource, ExecutionContext } from '@nitrostack/core';

export class PortfolioResources {
  @Resource({
    uri: 'portfolio://analysis',
    name: 'Portfolio Analysis',
    description: 'Portfolio analysis resources',
    mimeType: 'application/json',
    examples: {
      response: {
        categories: [
          'Portfolio Overview',
          'Asset Allocation',
          'Risk Analysis',
          'Investment Recommendations'
        ]
      }
    }
  })
  async getPortfolioResources(uri: string, ctx: ExecutionContext) {
    ctx.logger.info('Fetching portfolio resources');

    const categories = [
      {
        name: 'Portfolio Overview',
        description: 'Summary of the investment portfolio'
      },
      {
        name: 'Asset Allocation',
        description: 'Recommended asset distribution'
      },
      {
        name: 'Risk Analysis',
        description: 'Portfolio risk assessment'
      },
      {
        name: 'Investment Recommendations',
        description: 'AI-powered investment suggestions'
      }
    ];

    return {
      contents: [
        {
          uri,
          mimeType: 'application/json',
          text: JSON.stringify({ categories }, null, 2)
        }
      ]
    };
  }
}