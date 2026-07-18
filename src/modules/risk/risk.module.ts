import { Module } from '@nitrostack/core';
import { RiskTools } from './risk.tools.js';
import { RiskResources } from './risk.resources.js';
import { RiskPrompts } from './risk.prompts.js';

@Module({
  name: 'risk',
  description: 'AI Risk Analyzer',
  controllers: [
    RiskTools,
    RiskResources,
    RiskPrompts
  ]
})
export class RiskModule {}