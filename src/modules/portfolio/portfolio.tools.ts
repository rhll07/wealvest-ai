import { ToolDecorator as Tool, Widget, ExecutionContext, z } from '@nitrostack/core';
import * as fs from 'fs';
import * as path from 'path';

export class PortfolioTools {
  @Tool({
    name: 'analyze_portfolio',
    description: 'Analyze an investment portfolio',
    inputSchema: z.object({
      operation: z.enum(['add', 'subtract', 'multiply', 'divide']).describe('Temporary placeholder'),
      a: z.number().describe('First number'),
      b: z.number().describe('Second number')
    }),
    examples: {
      request: {
        operation: 'add',
        a: 5,
        b: 3
      },
      response: {
        operation: 'add',
        a: 5,
        b: 3,
        result: 8,
        expression: '5 + 3 = 8'
      }
    }
  })
  @Widget('portfolio-result')
  async analyzePortfolio(input: any, ctx: ExecutionContext) {
    ctx.logger.info('Analyzing portfolio', {
      operation: input.operation,
      a: input.a,
      b: input.b
    });

    let result: number;
    let symbol: string;

    switch (input.operation) {
      case 'add':
        result = input.a + input.b;
        symbol = '+';
        break;
      case 'subtract':
        result = input.a - input.b;
        symbol = '-';
        break;
      case 'multiply':
        result = input.a * input.b;
        symbol = '×';
        break;
      case 'divide':
        if (input.b === 0) {
          throw new Error('Cannot divide by zero');
        }
        result = input.a / input.b;
        symbol = '÷';
        break;
      default:
        throw new Error('Invalid operation');
    }

    return {
      operation: input.operation,
      a: input.a,
      b: input.b,
      result,
      expression: `${input.a} ${symbol} ${input.b} = ${result}`
    };
  }

  @Tool({
    name: 'portfolio_file_upload',
    description: 'Temporary placeholder tool for portfolio file processing.',
    inputSchema: z.object({
      file_name: z.string().describe('Name of the uploaded file'),
      file_type: z.string().describe('MIME type of the uploaded file'),
      file_content: z.string().describe('Base64 encoded file content.'),
      value: z.number().optional(),
      from_unit: z.enum(['C', 'F']).optional(),
      to_unit: z.enum(['C', 'F']).optional()
    })
  })
  async portfolioFileUpload(input: any, ctx: ExecutionContext) {
    ctx.logger.info('Processing uploaded portfolio file', {
      name: input.file_name,
      type: input.file_type
    });

    const uploadsDir = path.join(process.cwd(), 'uploads');

    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, input.file_name);

    if (input.file_content) {
      try {
        const matches = input.file_content.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        const buffer = matches && matches.length === 3
          ? Buffer.from(matches[2], 'base64')
          : Buffer.from(input.file_content, 'base64');

        fs.writeFileSync(filePath, buffer);
      } catch (e) {
        ctx.logger.error('Failed to save file', {
          error: e instanceof Error ? e.message : String(e)
        });
      }
    }

    return {
      status: 'success',
      file: input.file_name,
      saved_path: filePath
    };
  }
}