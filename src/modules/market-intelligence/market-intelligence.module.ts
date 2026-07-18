import { Module } from '@nitrostack/core';
import { MarketIntelligenceTools } from './market-intelligence.tools.js';

@Module({
  name: 'market-intelligence',
  description: 'Market Intelligence',
  controllers: [
    MarketIntelligenceTools
  ]
})
export class MarketIntelligenceModule {}

