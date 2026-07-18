'use client';

import { useTheme, useWidgetSDK } from '@nitrostack/widgets';

export default function LandingPage() {
  const theme = useTheme();
  const sdk = useWidgetSDK();
  const { isReady, sendFollowUpMessage } = sdk || {};

  const isDark = theme === 'dark';
  
  const colors = {
    bg: isDark ? '#0f172a' : '#ffffff',
    text: isDark ? '#f8fafc' : '#0f172a',
    subtext: isDark ? '#94a3b8' : '#64748b',
    cardBg: isDark ? '#1e293b' : '#f8fafc',
    cardBorder: isDark ? '#334155' : '#e2e8f0',
    primary: '#3b82f6',
    accent: '#10b981'
  };

  const features = [
    {
      title: 'Portfolio Analyzer',
      description: 'Analyze asset allocation, sector concentration, and diversification metrics.',
      icon: '📊',
    },
    {
      title: 'Investment Simulator',
      description: 'Run compounding growth simulations for both lump-sum and monthly SIP investments.',
      icon: '📈',
    },
    {
      title: 'Market Intelligence',
      description: 'Access contextual financial headlines, market indicators, and company insights.',
      icon: '📰',
    },
    {
      title: 'Risk Assessment',
      description: 'Evaluate portfolio quality, exposure alerts, and risk profile balancing.',
      icon: '🛡️',
    },
    {
      title: 'Report Generator',
      description: 'Compile and export professional wealth analysis summaries as PDF, MD, or JSON.',
      icon: '📥',
    },
  ];

  const handleStartAnalysis = () => {
    if (isReady && sendFollowUpMessage) {
      sendFollowUpMessage('Hello WealVest AI, please help me start my portfolio analysis and wealth planning!');
    } else {
      alert('Welcome to WealVest AI! Connect this server to an MCP-enabled chat client (such as NitroStudio) to start your analysis.');
    }
  };

  return (
    <div style={{
      backgroundColor: colors.bg,
      color: colors.text,
      minHeight: '100vh',
      fontFamily: 'Inter, system-ui, sans-serif',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    }}>
      {/* Hero Section */}
      <div style={{
        padding: '100px 24px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: isDark ? '#1e293b' : '#eff6ff',
          color: colors.primary,
          padding: '6px 16px',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: 600,
          marginBottom: '24px',
        }}>
          <span>✨</span> MCP-Powered Wealth Intelligence
        </div>
        <h1 style={{
          fontSize: '60px',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          margin: '0 0 24px 0',
        }}>
          WealVest AI
        </h1>
        <p style={{
          fontSize: '20px',
          color: colors.subtext,
          maxWidth: '600px',
          margin: '0 auto 40px auto',
          lineHeight: 1.6,
        }}>
          Orchestrating specialized financial tools for smarter wealth planning and intelligence, powered by Model Context Protocol.
        </p>
        <button
          onClick={handleStartAnalysis}
          style={{
            padding: '16px 32px',
            fontSize: '16px',
            fontWeight: 600,
            backgroundColor: colors.primary,
            color: '#ffffff',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Start Analysis
        </button>
      </div>

      {/* Features */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 80px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: '16px',
              padding: '24px',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{f.icon}</div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: colors.subtext, lineHeight: 1.5 }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
