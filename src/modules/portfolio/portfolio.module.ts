import { Module } from '@nitrostack/core';
import { PortfolioTools } from './portfolio.tools.js';
import { PortfolioResources } from './portfolio.resources.js';
import { PortfolioPrompts } from './portfolio.prompts.js';

@Module({
  name: 'portfolio',
  description: 'AI Portfolio Analyzer',
  controllers: [
    PortfolioTools,
    PortfolioResources,
    PortfolioPrompts
  ]
})
export class PortfolioModule {}