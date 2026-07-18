'use client';

import { useWidgetSDK } from '@nitrostack/widgets';
import { Card, Badge } from '../../components/UI';

interface Projection {
  year: number;
  balance: number;
  invested: number;
}

interface SimulatorData {
  finalCorpus: number;
  totalInvested: number;
  totalReturns: number;
  yearlyProjections: Projection[];
  comparison: {
    at8Percent: number;
    at15Percent: number;
    inflationAdjusted: number;
  };
  parameters: {
    expectedReturn: number;
    duration: number;
  };
}

export default function InvestmentSimulatorResult() {
  const { getToolOutput } = useWidgetSDK();
  const data = getToolOutput<SimulatorData>();

  if (!data) return <div style={{ padding: '24px' }}>Simulating growth...</div>;

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
        <h3 style={{ margin: 0 }}>Investment Simulation</h3>
        <Badge color="blue">{data.parameters.duration} Years @ {data.parameters.expectedReturn}%</Badge>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <Card style={{ padding: '16px' }}>
            <div style={{ fontSize: '12px', marginBottom: '4px' }}>Final Corpus</div>
            <div style={{ fontSize: '20px', fontWeight: 700 }}>{formatCurrency(data.finalCorpus)}</div>
        </Card>
        <Card style={{ padding: '16px' }}>
            <div style={{ fontSize: '12px', marginBottom: '4px' }}>Wealth Gained</div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#10b981' }}>{formatCurrency(data.totalReturns)}</div>
        </Card>
      </div>

      <h4 style={{ marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Scenarios</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span>8% Return</span>
            <span style={{ fontWeight: 700 }}>{formatCurrency(data.comparison.at8Percent)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span>15% Return</span>
            <span style={{ fontWeight: 700 }}>{formatCurrency(data.comparison.at15Percent)}</span>
        </div>
      </div>
    </Card>
  );
}
