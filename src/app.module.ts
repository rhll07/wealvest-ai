import { McpApp, Module, ConfigModule } from '@nitrostack/core';

import { PortfolioModule } from './modules/portfolio/portfolio.module.js';
import { RiskModule } from './modules/risk/risk.module.js';
import { InvestmentSimulatorModule } from './modules/investment-simulator/investment-simulator.module.js';
import { MarketIntelligenceModule } from './modules/market-intelligence/market-intelligence.module.js';
import { ReportGeneratorModule } from './modules/report-generator/report-generator.module.js';

import { SystemHealthCheck } from './health/system.health.js';

@McpApp({
  module: AppModule,
  server: {
    name: 'wealvest-ai',
    version: '1.0.0'
  },
  logging: {
    level: 'info'
  }
})
@Module({
  name: 'app',
  description: 'WealVest AI MCP Server',
  imports: [
    ConfigModule.forRoot(),
    PortfolioModule,
    RiskModule,
    InvestmentSimulatorModule,
    MarketIntelligenceModule,
    ReportGeneratorModule
  ],
  providers: [
    SystemHealthCheck,
  ]
})
export class AppModule {}