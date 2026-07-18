import { Module } from '@nitrostack/core';
import { ReportGeneratorTools } from './report-generator.tools.js';
import { ReportGeneratorResources } from './report-generator.resources.js';
import { ReportGeneratorPrompts } from './report-generator.prompts.js';

@Module({
  name: 'report-generator',
  description: 'Report Generator',
  controllers: [ReportGeneratorTools, ReportGeneratorResources, ReportGeneratorPrompts]
})
export class ReportGeneratorModule {}

