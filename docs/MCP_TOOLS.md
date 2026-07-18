# MCP Tool Catalog

This document describes every MCP tool exposed by the NitroStack MCP Server.

---

# Portfolio Analyzer

Purpose

Analyze user portfolios and investment allocation.

Inputs

- Holdings
- Investment Amount

Outputs

- Allocation Summary
- Diversification Score
- Sector Distribution

Dependencies

None

---

# Investment Simulator

Purpose

Project investment growth.

Inputs

- Initial Amount
- Monthly SIP
- Expected Annual Return
- Investment Duration

Outputs

- Growth Projection
- Final Corpus
- Total Investment
- Estimated Returns

Dependencies

Financial Calculator

---

# Financial Calculator

Purpose

Perform deterministic financial calculations.

Supported Operations

- Compound Interest
- CAGR
- ROI
- Future Value

Dependencies

None

---

# Market Intelligence

Purpose

Provide contextual financial information.

Outputs

- News Summary
- Market Overview
- Company Information

Dependencies

External Market APIs

---

# Risk Analyzer

Purpose

Evaluate portfolio quality.

Outputs

- Diversification Score
- Concentration Metrics
- Risk Indicators

Dependencies

Portfolio Analyzer

---

# Report Generator

Purpose

Generate downloadable reports.

Formats

- PDF
- Markdown
- JSON

Dependencies

All previous tools

---

# MCP Orchestration Example

User

↓

AI Gateway

↓

Portfolio Analyzer

↓

Risk Analyzer

↓

Report Generator

↓

Final Response
