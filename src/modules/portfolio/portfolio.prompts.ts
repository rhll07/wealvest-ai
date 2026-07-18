import { PromptDecorator as Prompt, ExecutionContext } from '@nitrostack/core';

export class PortfolioPrompts {
  @Prompt({
    name: 'portfolio_analysis_help',
    description: 'Get help with portfolio analysis',
    arguments: [
      {
        name: 'query',
        description: 'Portfolio-related question (optional)',
        required: false
      }
    ]
  })
  async getHelp(args: any, ctx: ExecutionContext) {
    ctx.logger.info('Generating portfolio analysis help prompt');

    const query = args.query;

    if (query) {
      return [
        {
          role: 'user' as const,
          content: query
        },
        {
          role: 'assistant' as const,
          content: `WealVest AI can help analyze your investment portfolio, assess risk, recommend asset allocation, estimate returns, and provide personalized investment suggestions based on your financial profile.`
        }
      ];
    }

    return [
      {
        role: 'user' as const,
        content: 'What can WealVest AI do?'
      },
      {
        role: 'assistant' as const,
        content: `WealVest AI currently supports:

• Portfolio Analysis
• Risk Assessment
• Asset Allocation Suggestions
• Investment Planning
• Personalized Financial Insights

This is currently a scaffold module. Advanced AI-powered recommendations will be added in the next implementation phase.`
      }
    ];
  }
}