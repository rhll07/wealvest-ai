'use client';

import { useTheme, useWidgetSDK } from '@nitrostack/widgets';

export default function LandingPage() {
  const theme = useTheme();
  const sdk = useWidgetSDK();
  const { isReady, sendFollowUpMessage } = sdk || {};

  const isDark = theme === 'dark';
  
  // Theme styling definitions
  const bgColor = isDark ? '#111827' : '#f9fafb';
  const textColor = isDark ? '#ffffff' : '#111827';
  const subtextColor = isDark ? '#9ca3af' : '#4b5563';
  const cardBgColor = isDark ? 'rgba(31, 41, 55, 0.6)' : 'rgba(255, 255, 255, 0.9)';
  const cardBorderColor = isDark ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 1)';
  const heroGradient = isDark
    ? 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)'
    : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
  const heroTextColor = '#ffffff';

  const features = [
    {
      title: 'Portfolio Analyzer',
      description: 'Analyze asset allocation, sector concentration, and diversification metrics.',
      icon: '📊',
      color: '#3b82f6',
    },
    {
      title: 'Investment Simulator',
      description: 'Run compounding growth simulations for both lump-sum and monthly SIP investments.',
      icon: '📈',
      color: '#10b981',
    },
    {
      title: 'Financial Calculator',
      description: 'Perform deterministic math for CAGR, ROI, Future Value, and more.',
      icon: '🧮',
      color: '#f59e0b',
    },
    {
      title: 'Market Intelligence',
      description: 'Access contextual financial headlines, market indicators, and company insights.',
      icon: '📰',
      color: '#8b5cf6',
    },
    {
      title: 'Risk Assessment',
      description: 'Evaluate portfolio quality, exposure alerts, and risk profile balancing.',
      icon: '🛡️',
      color: '#ef4444',
    },
    {
      title: 'Report Generator',
      description: 'Compile and export professional wealth analysis summaries as PDF, MD, or JSON.',
      icon: '📥',
      color: '#06b6d4',
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
      backgroundColor: bgColor,
      color: textColor,
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    }}>
      {/* Hero Section */}
      <div style={{
        background: heroGradient,
        color: heroTextColor,
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}>
        {/* Subtle background glow effect */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.15)',
            padding: '6px 16px',
            borderRadius: '9999px',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '24px',
            backdropFilter: 'blur(4px)',
          }}>
            <span>✨</span> NitroStack MCP Hackathon 2026
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            margin: '0 0 16px 0',
            lineHeight: 1.1,
          }}>
            WealVest AI
          </h1>
          <p style={{
            fontSize: '20px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 32px auto',
            lineHeight: 1.5,
            fontWeight: 300,
          }}>
            An MCP-powered wealth intelligence platform orchestrating portfolio analysis, growth simulations, risk evaluation, and reports.
          </p>
          <button
            onClick={handleStartAnalysis}
            style={{
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 600,
              backgroundColor: '#ffffff',
              color: '#1d4ed8',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
            }}
          >
            Start Analysis
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 24px',
      }}>
        {/* Short Description */}
        <div style={{
          textAlign: 'center',
          marginBottom: '56px',
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 700,
            margin: '0 0 12px 0',
          }}>
            Unified Financial Tool Orchestration
          </h2>
          <p style={{
            fontSize: '16px',
            color: subtextColor,
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Rather than functioning as a standard chat assistant, WealVest AI coordinates dedicated, independent MCP tools to run precise, deterministic computations with interactive widget visualizations.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: cardBgColor,
                border: `1px solid ${cardBorderColor}`,
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.02)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: `${feature.color}15`,
                fontSize: '24px',
                marginBottom: '16px',
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                margin: '0 0 8px 0',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: subtextColor,
                margin: 0,
                lineHeight: 1.5,
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '80px',
          paddingTop: '24px',
          borderTop: `1px solid ${cardBorderColor}`,
          textAlign: 'center',
          fontSize: '14px',
          color: subtextColor,
        }}>
          <p style={{ margin: 0 }}>
            Powered by <strong>NitroStack MCP SDK</strong> • BFSI & FinTech Hackathon Prototype
          </p>
        </div>
      </div>
    </div>
  );
}
