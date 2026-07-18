'use client';

import { useWidgetSDK } from '@nitrostack/widgets';
import { Card, Badge } from '../../components/UI';

interface PortfolioAnalysisData {
  portfolioScore: number;
  riskScore: number;
  recommendedAllocation: {
    equity: number;
    debt: number;
    gold: number;
  };
  expectedCAGR: string;
  projectedCorpus: number;
  emergencyFundAnalysis: {
    status: 'Adequate' | 'Insufficient';
    current: number;
    required: number;
  };
  recommendations: string[];
  warnings: string[];
  insights: string;
}

export default function PortfolioResult() {
  const { getToolOutput } = useWidgetSDK();
  const data = getToolOutput<PortfolioAnalysisData>();

  if (!data) return <div style={{ padding: '24px' }}>Analyzing portfolio...</div>;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h3 style={{ margin: 0 }}>Portfolio Analysis</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
            <Badge color="green">Score: {data.portfolioScore}</Badge>
            <Badge color={data.riskScore > 60 ? 'red' : 'blue'}>Risk: {data.riskScore}</Badge>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <Card style={{ padding: '16px' }}>
          <div style={{ fontSize: '12px', marginBottom: '4px' }}>Projected Corpus</div>
          <div style={{ fontSize: '20px', fontWeight: 700 }}>{formatCurrency(data.projectedCorpus)}</div>
        </Card>
        <Card style={{ padding: '16px' }}>
          <div style={{ fontSize: '12px', marginBottom: '4px' }}>Expected CAGR</div>
          <div style={{ fontSize: '20px', fontWeight: 700 }}>{data.expectedCAGR}%</div>
        </Card>
      </div>
      
      <h4 style={{ marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recommendations</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {data.recommendations.map((rec, i) => (
          <div key={i} style={{ fontSize: '14px', padding: '8px 0' }}>• {rec}</div>
        ))}
      </div>
    </Card>
  );
}
