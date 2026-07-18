import { Module } from '@nitrostack/core';
import { InvestmentSimulatorTools } from './investment-simulator.tools.js';
import { InvestmentSimulatorResources } from './investment-simulator.resources.js';
import { InvestmentSimulatorPrompts } from './investment-simulator.prompts.js';

@Module({
  name: 'investment-simulator',
  description: 'Investment Simulator',
  controllers: [InvestmentSimulatorTools, InvestmentSimulatorResources, InvestmentSimulatorPrompts]
})
export class InvestmentSimulatorModule {}

