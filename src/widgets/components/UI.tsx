import React from 'react';
import { useTheme } from '@nitrostack/widgets';

export const Card = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
  const theme = useTheme();
  const isDark = theme === 'dark';
  return (
    <div style={{
      backgroundColor: isDark ? '#1e293b' : '#ffffff',
      border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
      borderRadius: '16px',
      padding: '24px',
      boxShadow: isDark ? 'none' : '0 1px 3px 0 rgba(0,0,0,0.1)',
      ...style
    }}>
      {children}
    </div>
  );
};

export const Badge = ({ children, color = 'blue' }: { children: React.ReactNode; color?: 'blue' | 'green' | 'red' | 'amber' }) => {
  const colors = {
    blue: { bg: '#dbeafe', text: '#1e40af' },
    green: { bg: '#dcfce7', text: '#166534' },
    red: { bg: '#fee2e2', text: '#991b1b' },
    amber: { bg: '#fef3c7', text: '#92400e' }
  };
  const { bg, text } = colors[color];
  return (
    <span style={{
      backgroundColor: bg,
      color: text,
      padding: '4px 8px',
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: 600,
    }}>
      {children}
    </span>
  );
};
