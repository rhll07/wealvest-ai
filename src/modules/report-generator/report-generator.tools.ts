import { ToolDecorator as Tool, Widget, ExecutionContext, z } from '@nitrostack/core';

export class ReportGeneratorTools {
  @Tool({
    name: 'generate_report',
    description: 'Generate a structured wealth analysis report (PDF/JSON/Markdown).',
    inputSchema: z.object({
      projectId: z.string().describe('Project ID for which to generate the report'),
      reportType: z.enum(['Portfolio', 'Simulation', 'Market']).describe('Type of report'),
      format: z.enum(['PDF', 'JSON', 'Markdown']).default('JSON').describe('Format of the generated report'),
      data: z.any().describe('Structured data to include in the report')
    }),
  })
  @Widget('report-result')
  async generateReport(input: any, ctx: ExecutionContext) {
    ctx.logger.info('Generating report', input);

    const { projectId, reportType, format, data } = input;

    // Simulate report generation
    const reportId = `rep_${Math.random().toString(36).substring(7)}`;
    const reportContent = {
      reportId,
      projectId,
      reportType,
      generatedAt: new Date().toISOString(),
      format,
      data
    };

    return {
      reportId,
      status: 'generated',
      format,
      url: `/reports/${reportId}.${format.toLowerCase()}`,
      content: format === 'JSON' ? reportContent : `Report generated in ${format} format.`
    };
  }
}
