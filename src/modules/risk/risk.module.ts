import { Module } from '@nitrostack/core';
import { RiskTools } from './risk.tools.js';

@Module({
  name: 'risk',
  description: 'AI Risk Analyzer',
  controllers: [
    RiskTools
  ]
})
export class RiskModule {}