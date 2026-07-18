'use client';

import { useTheme, useWidgetSDK } from '@nitrostack/widgets';

interface ReportData {
  reportId: string;
  status: string;
  format: string;
  url: string;
  content: any;
}

export default function ReportResult() {
  const theme = useTheme();
  const { getToolOutput } = useWidgetSDK();
  const data = getToolOutput<ReportData>();

  if (!data) {
    return <div style={{ padding: '24px' }}>Generating report...</div>;
  }

  const isDark = theme === 'dark';
  const bgColor = isDark ? '#1e293b' : '#ffffff';
  const textColor = isDark ? '#f8fafc' : '#0f172a';

  return (
    <div style={{ padding: '24px', backgroundColor: bgColor, color: textColor, borderRadius: '16px' }}>
      <h3 style={{ marginTop: 0 }}>Report Generated Successfully</h3>
      <p>ID: {data.reportId}</p>
      <p>Format: {data.format}</p>
      <a href={data.url} style={{ color: '#3b82f6' }}>Download Report</a>
      {typeof data.content === 'object' && (
        <pre style={{ fontSize: '12px', background: isDark ? '#0f172a' : '#f1f5f9', padding: '16px', borderRadius: '8px' }}>
          {JSON.stringify(data.content, null, 2)}
        </pre>
      )}
    </div>
  );
}
