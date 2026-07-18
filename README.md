# 💰 WealVest AI

> **AI-powered financial analysis platform built with NitroStack MCP.**

WealVest AI demonstrates how the **Model Context Protocol (MCP)** can power modular AI-driven financial tools for investment analysis, risk assessment, market intelligence, and report generation.

> **Project Status:** 🚧 MVP Complete | Website Integration In Progress

---

## 📖 Overview

WealVest AI is an experimental financial intelligence platform built for the **NitroStack MCP Hackathon**.

The project exposes financial capabilities as MCP tools that can be executed from **NitroStudio**, showcasing how AI-powered financial workflows can be implemented using modular MCP architecture.

Current capabilities include:

- 📊 Portfolio Analysis
- ⚠️ Risk Assessment
- 📈 Investment Simulation
- 🌍 Market Intelligence
- 📄 Financial Report Generation

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- Vite

## Backend

- Node.js
- NitroStack MCP

## Development Tools

- NitroStudio
- TypeScript
- npm

---

# ✅ Current Status

## Successfully Implemented

### 📊 Portfolio Analyzer

- Portfolio analysis workflow
- Financial input validation
- MCP Tool implementation
- Widget integration
- Portfolio insights

---

### ⚠️ Risk Assessment

- Risk profile analysis
- Financial scoring
- Risk recommendations
- MCP integration

---

### 📈 Investment Simulator

- Investment projection
- Return estimation
- Future value calculation
- Financial simulations

---

### 🌍 Market Intelligence

- Market trend analysis
- Industry insights
- AI-assisted summaries

---

### 📄 Report Generator

- Financial report generation
- Structured summaries
- Recommendation reports

---

### 🔌 MCP Integration

- MCP Server
- Tool Registration
- Widget Registration
- NitroStudio Integration
- Modular Architecture

---

# ✅ Working Features

| Feature | Status |
|---------|--------|
| React Frontend | ✅ |
| Tailwind UI | ✅ |
| MCP Server | ✅ |
| Portfolio Analyzer | ✅ |
| Risk Assessment | ✅ |
| Investment Simulator | ✅ |
| Market Intelligence | ✅ |
| Report Generator | ✅ |
| NitroStudio Integration | ✅ |
| Widget Rendering | ✅ |
| Financial Tool Execution (NitroStudio) | ✅ |

---

# 🚧 Currently Under Development

The following functionality is **not yet implemented**:

- Website ↔ MCP communication
- Backend API integration
- Direct tool execution from the website
- Persistent user accounts
- Database integration
- Authentication
- Real-time financial data
- Production deployment

---

# 🏗 Architecture

```text
                React Website
                      │
                      │
          (UI Components Only)
                      │
                      ▼
            NitroStudio (MCP Client)
                      │
                      ▼
           NitroStack MCP Server
                      │
      ┌───────────────┼───────────────┐
      │               │               │
      ▼               ▼               ▼
 Portfolio       Risk Assessment   Investment Simulator

                      │
                      ▼
           Market Intelligence

                      │
                      ▼
             Report Generator
```

---

# ⚠️ Current Limitation

At present, the **financial tools are executed through NitroStudio**, which acts as the MCP client.

The React website currently provides the frontend interface but **does not yet communicate with the MCP server**.

This means:

- ✅ MCP tools work inside NitroStudio.
- ✅ Widgets render correctly in NitroStudio.
- ❌ The website cannot yet invoke MCP tools directly.

Backend integration between the website and the MCP server is planned for a future update.

---

# 🚀 Future Roadmap

## Phase 1 ✅ (Completed)

- MCP server
- Financial tools
- NitroStudio integration
- Widget implementation
- Modular architecture

---

## Phase 2 🚧

- Backend API
- Website ↔ MCP integration
- Live financial analysis from the website
- User authentication
- Portfolio persistence
- Database support

---

## Phase 3 🔮

- AI investment recommendations
- Portfolio optimization
- Historical tracking
- PDF report export
- Cloud deployment
- Multi-user collaboration
- Real-time market APIs

---

# ▶️ Getting Started

Clone the repository:

```bash
git clone https://github.com/<username>/wealvest-ai.git
```

Move into the project:

```bash
cd wealvest-ai
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

# 🧪 Demo

Current demonstrations are performed through **NitroStudio**, where all implemented MCP tools can be executed and tested.

Available demo tools:

- 📊 Portfolio Analyzer
- ⚠️ Risk Assessment
- 📈 Investment Simulator
- 🌍 Market Intelligence
- 📄 Report Generator

---

# 🤝 Contributing

Contributions, feature suggestions, and bug reports are always welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Rahul Krishna R**

If you found this project helpful or interesting, consider giving it a ⭐ on GitHub!
