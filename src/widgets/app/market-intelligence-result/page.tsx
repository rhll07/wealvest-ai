'use client';

import { useWidgetSDK } from '@nitrostack/widgets';
import { Card, Badge } from '../../components/UI';

interface Headline {
  category: string;
  title: string;
  impact: 'Positive' | 'Neutral' | 'Negative';
}

interface MarketData {
  category: string;
  headlines: Headline[];
  marketSentiment: string;
  topGainers: string[];
  topLosers: string[];
}

export default function MarketIntelligenceResult() {
  const { getToolOutput } = useWidgetSDK();
  const data = getToolOutput<MarketData>();

  if (!data) return <div style={{ padding: '24px' }}>Loading insights...</div>;

  const getImpactColor = (impact: string): 'green' | 'blue' | 'red' => {
    if (impact === 'Positive') return 'green';
    if (impact === 'Negative') return 'red';
    return 'blue';
  };

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0 }}>{data.category} Insights</h3>
        <Badge color="blue">{data.marketSentiment}</Badge>
      </div>
      
      <h4 style={{ marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recent Headlines</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {data.headlines.map((h, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Badge color={getImpactColor(h.impact)}>{h.impact}</Badge>
            <span style={{ fontSize: '14px' }}>{h.title}</span>
          </div>
        ))}
      </div>
      
      <div style={{ display: 'flex', gap: '24px', fontSize: '14px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
        <div><strong>Top Gainers:</strong> {data.topGainers.join(', ')}</div>
        <div><strong>Top Losers:</strong> {data.topLosers.join(', ')}</div>
      </div>
    </Card>
  );
}
