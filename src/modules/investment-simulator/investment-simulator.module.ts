import { Module } from '@nitrostack/core';
import { InvestmentSimulatorTools } from './investment-simulator.tools.js';

@Module({
  name: 'investment-simulator',
  description: 'Investment Simulator',
  controllers: [
    InvestmentSimulatorTools
  ]
})
export class InvestmentSimulatorModule {}

