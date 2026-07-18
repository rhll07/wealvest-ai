import { Module } from '@nitrostack/core';
import { ReportGeneratorTools } from './report-generator.tools.js';

@Module({
  name: 'report-generator',
  description: 'Report Generator',
  controllers: [
    ReportGeneratorTools
  ]
})
export class ReportGeneratorModule {}

