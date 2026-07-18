import { Module } from '@nitrostack/core';
import { MarketIntelligenceTools } from './market-intelligence.tools.js';
import { MarketIntelligenceResources } from './market-intelligence.resources.js';
import { MarketIntelligencePrompts } from './market-intelligence.prompts.js';

@Module({
  name: 'market-intelligence',
  description: 'Market Intelligence',
  controllers: [MarketIntelligenceTools, MarketIntelligenceResources, MarketIntelligencePrompts]
})
export class MarketIntelligenceModule {}

