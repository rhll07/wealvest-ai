'use client';

import { useWidgetSDK } from '@nitrostack/widgets';
import { Card, Badge } from '../../components/UI';

interface RiskData {
  riskScore: number;
  riskLevel: string;
  allocation: Record<string, number>;
  alerts: string[];
  summary: string;
}

export default function RiskResult() {
  const { getToolOutput } = useWidgetSDK();
  const data = getToolOutput<RiskData>();

  if (!data) return <div style={{ padding: '24px' }}>Assessing risk...</div>;

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0 }}>Risk Assessment</h3>
        <Badge color={data.riskLevel === 'High' ? 'red' : 'green'}>{data.riskLevel}</Badge>
      </div>
      
      <p style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px 0' }}>Score: {data.riskScore}/100</p>
      <p style={{ marginBottom: '24px' }}>{data.summary}</p>
      
      <h4 style={{ marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portfolio Exposure</h4>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        {Object.entries(data.allocation).map(([asset, val]) => (
          <Badge key={asset}>{asset}: {val}%</Badge>
        ))}
      </div>

      {data.alerts.length > 0 && (
        <>
          <h4 style={{ marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Security Alerts</h4>
          {data.alerts.map((alert, i) => (
            <div key={i} style={{ color: '#991b1b', backgroundColor: '#fee2e2', padding: '12px', borderRadius: '8px', marginBottom: '8px', fontSize: '14px' }}>
              ⚠️ {alert}
            </div>
          ))}
        </>
      )}
    </Card>
  );
}
