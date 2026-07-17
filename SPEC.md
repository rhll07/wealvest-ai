# WealVest AI

> MCP-Powered Wealth Intelligence Platform

---

## Project Information

**Project Name:** WealVest AI

**Category:** BFSI & FinTech

**Event:** NitroStack MCP Hackathon 2026

**Project Type:** AI-Assisted Wealth Intelligence Platform

**Technology Focus:** Model Context Protocol (MCP)

**Development Approach:** Full Stack Web Application

**Current Status:** Prototype (Hackathon MVP)

---

# Executive Summary

WealVest AI is an MCP-powered wealth intelligence platform developed as part of the NitroStack MCP Hackathon.

The project demonstrates how the Model Context Protocol (MCP) can be used to orchestrate multiple financial tools through a single conversational interface.

Instead of functioning as a traditional finance chatbot, the platform coordinates specialized financial tools such as portfolio analysis, investment simulations, financial calculations, market intelligence, risk assessment, and report generation.

The objective is to showcase practical MCP orchestration within the BFSI domain while maintaining a modular and extensible software architecture.

This project is intended as a functional proof of concept rather than a production-ready financial platform.

# Vision

Modern investors often switch between multiple financial platforms to complete even simple investment analysis.

Portfolio tracking, SIP calculations, market research, financial news, and investment planning typically exist across separate applications.

WealVest AI explores how MCP can unify these workflows into a single AI-assisted experience where specialized tools collaborate to produce meaningful financial insights.

The project aims to demonstrate the advantages of tool orchestration over standalone language model responses.

---

# Objectives

The primary objectives of this project are:

- Demonstrate practical implementation of Model Context Protocol.
- Build a modular financial analysis platform.
- Showcase AI orchestration across multiple financial tools.
- Simplify common investment analysis workflows.
- Generate explainable financial insights.
- Maintain clear separation between AI reasoning and business logic.
- Provide an extensible architecture suitable for future enhancements.

---

# Success Criteria

The project will be considered successful if it demonstrates:

- Functional MCP server implementation.
- Successful orchestration between multiple MCP tools.
- Working AI-assisted financial analysis workflows.
- Clean and modular software architecture.
- Intuitive user experience.
- Practical BFSI use case suitable for hackathon demonstration.

# Problem Statement

Retail investors frequently rely on multiple disconnected platforms while researching investments.

A typical workflow may involve:

- Checking live market information.
- Reading financial news.
- Calculating SIP returns.
- Evaluating investment risks.
- Comparing different allocation strategies.
- Preparing investment summaries.

These activities often require switching between several independent applications.

Although AI assistants can answer financial questions, they typically lack structured access to specialized financial tools capable of performing calculations, simulations, or portfolio analysis.

The Model Context Protocol enables AI systems to coordinate dedicated tools capable of solving specific financial tasks while maintaining a unified conversational workflow.

WealVest AI explores this architecture through an integrated wealth intelligence platform.

# Project Scope

The project focuses on AI-assisted financial analysis and investment planning.

The platform is designed to help users:

- Understand portfolio composition.
- Simulate investment growth.
- Analyze investment allocations.
- Review market trends.
- Estimate financial outcomes.
- Generate structured investment reports.

---

## Out of Scope

The project does not attempt to:

- Execute financial transactions.
- Connect directly to brokerage accounts.
- Predict future stock prices.
- Provide personalized financial advice.
- Guarantee investment returns.
- Replace certified financial professionals.

The application is intended for educational, analytical, and demonstration purposes only.

# Functional Requirements

The application shall provide the following core capabilities.

---

## User Interaction

Users shall be able to:

- Ask investment-related questions.
- Request financial calculations.
- Simulate investment scenarios.
- Analyze portfolio allocations.
- Generate downloadable reports.
- Explore market information.

---

## Portfolio Analysis

The platform shall:

- Analyze investment allocation.
- Calculate diversification metrics.
- Identify sector concentration.
- Generate portfolio summaries.
- Provide asset distribution visualizations.

---

## Investment Simulation

The platform shall support:

- SIP calculations.
- Lump sum investment projections.
- Compound interest calculations.
- Goal-based investment simulations.
- Long-term wealth estimation.

---

## Financial Calculations

The platform shall provide:

- Compound interest calculator.
- Future value calculator.
- Return estimation.
- CAGR calculations.
- Investment comparison calculations.

---

## Market Intelligence

The platform shall:

- Retrieve financial news.
- Summarize market events.
- Present company information.
- Display market indices.
- Provide contextual financial insights.

---

## Risk Assessment

The platform shall evaluate:

- Portfolio diversification.
- Investment concentration.
- Asset allocation balance.
- General investment risk indicators.

---

## Report Generation

Users shall be able to export:

- Portfolio summaries.
- Simulation reports.
- Financial analysis reports.
- Market summaries.

Supported formats include:

- PDF
- Markdown
- JSON

# System Architecture

WealVest AI follows a modular architecture where the frontend communicates with an AI orchestration layer, which coordinates specialized MCP tools through a NitroStack MCP server.

```
+------------------------------------------------------------+
|                        Frontend UI                         |
|        React + TypeScript + Tailwind CSS                   |
+-----------------------------+------------------------------+
                              |
                              |
                    REST / Streaming API
                              |
+-----------------------------v------------------------------+
|                    Backend API (Express)                   |
|          Authentication • Sessions • AI Gateway            |
+-----------------------------+------------------------------+
                              |
                              |
                     MCP Client (NitroStack)
                              |
+-----------------------------v------------------------------+
|                  NitroStack MCP Server                     |
+------------------------------------------------------------+
| Portfolio Tool                                              |
| Investment Simulator                                        |
| Financial Calculator                                        |
| Market Intelligence                                         |
| Risk Analyzer                                               |
| Report Generator                                            |
+------------------------------------------------------------+
                              |
                              |
                  External APIs / Internal Logic
```

Each tool performs a single responsibility.

The AI layer focuses only on reasoning, planning, and deciding which tools should be executed.

Business logic remains inside MCP tools.

# MCP Architecture

The application demonstrates the use of Model Context Protocol (MCP) by exposing financial capabilities as modular tools.

Instead of embedding every capability inside the language model, the AI coordinates independent tools that perform deterministic tasks.

Each MCP tool is responsible for:

- validating inputs
- executing business logic
- returning structured outputs
- reporting errors consistently

The AI never directly performs financial calculations.

Instead it invokes the appropriate MCP tool and summarizes the returned information.

This architecture keeps reasoning and execution clearly separated.

---

## MCP Tool Flow

User Request

↓

AI Gateway

↓

Intent Analysis

↓

Required MCP Tool(s)

↓

Tool Execution

↓

Structured Result

↓

Natural Language Response

# Frontend Architecture

The frontend follows a component-based architecture built with React.

## Pages

Landing Page

Dashboard

Portfolio Workspace

Investment Simulator

Market Intelligence

Reports

Chat Assistant

Settings

---

## Shared Components

Navbar

Sidebar

Prompt Input

Portfolio Card

Market Card

Risk Card

Report Viewer

Simulation Chart

Loading Components

Toast Notifications

Modal Components

---

## State Management

Application state includes:

- Authentication
- User session
- Chat history
- Current project
- Reports
- Portfolio data
- Simulation results
- Market cache

Global state should remain lightweight.

Heavy business logic must remain inside backend services and MCP tools.

# Backend Architecture

The backend follows a layered architecture.

```
Routes

↓

Controllers

↓

Services

↓

AI Gateway

↓

MCP Client

↓

NitroStack MCP Server
```

---

## Routes

Responsible for:

- Request routing
- Middleware
- Authentication
- Validation

---

## Controllers

Responsible for:

- Parsing requests

- Calling services

- Formatting responses

---

## Services

Responsible for:

- Business workflows

- AI orchestration

- Session management

- Report generation

---

## AI Gateway

Responsible for:

- Prompt construction

- Conversation memory

- Tool selection

- Response generation

---

## MCP Client

Responsible for:

- Discovering available tools

- Calling tools

- Returning structured outputs

---

## MCP Server

Hosts all financial tools.

Every tool remains independently maintainable.

# Database Design

MongoDB is used for persistent storage.

---

## Users

Fields

- name
- email
- passwordHash
- createdAt

---

## Projects

Fields

- userId
- projectName
- description
- createdAt

---

## Chat Sessions

Fields

- projectId
- userPrompt
- assistantResponse
- timestamp

---

## Reports

Fields

- projectId
- reportType
- reportContent
- generatedAt

---

## Simulations

Fields

- projectId
- investmentAmount
- duration
- expectedReturn
- generatedResult

---

## Portfolio Snapshots

Fields

- projectId
- holdings
- diversificationScore
- allocation
- generatedAt

# API Specification

## Authentication

POST /api/auth/signup

POST /api/auth/login

POST /api/auth/logout

GET /api/auth/profile

---

## Chat

POST /api/chat

Primary conversational endpoint.

The AI determines which MCP tools should be invoked.

---

## Portfolio

POST /api/portfolio/analyze

GET /api/portfolio/:id

---

## Investment Simulator

POST /api/simulator/run

---

## Financial Calculator

POST /api/calculator/compound

POST /api/calculator/cagr

POST /api/calculator/future-value

---

## Market Intelligence

GET /api/market/news

GET /api/market/search

---

## Reports

POST /api/report/generate

GET /api/report/:id

GET /api/report/download

# MCP Tool Specifications

## Portfolio Analyzer

Purpose

Analyze investment allocation and diversification.

Inputs

- Holdings
- Investment Amount

Outputs

- Allocation Summary
- Diversification Score
- Sector Distribution

---

## Investment Simulator

Purpose

Estimate long-term investment growth.

Inputs

- Initial Amount
- Monthly SIP
- Expected Return
- Duration

Outputs

- Yearly Projection
- Final Corpus
- Total Investment
- Estimated Returns

---

## Financial Calculator

Purpose

Perform deterministic financial calculations.

Supported Calculations

- Compound Interest
- CAGR
- Future Value
- ROI

---

## Market Intelligence

Purpose

Retrieve financial information.

Outputs

- Market Summary
- Company Information
- Financial Headlines

---

## Risk Analyzer

Purpose

Evaluate investment risk.

Outputs

- Diversification Score
- Concentration Analysis
- Risk Indicators

---

## Report Generator

Purpose

Generate structured reports.

Formats

- PDF

- Markdown

- JSON

# Development Phases

## Phase 1

- Project setup
- NitroStack configuration
- Basic frontend
- Backend initialization

---

## Phase 2

- Portfolio Analyzer
- Financial Calculator
- Dashboard UI

---

## Phase 3

- Investment Simulator
- Risk Analyzer
- Market Intelligence

---

## Phase 4

- AI Chat
- MCP Orchestration
- Report Generator

---

## Phase 5

- UI refinement
- Testing
- Documentation
- Deployment

# Security Requirements

The application shall:

- Validate all API requests.
- Hash passwords securely.
- Protect authenticated routes.
- Store secrets in environment variables.
- Validate user inputs.
- Handle unexpected failures gracefully.
- Return consistent API responses.
- Prevent prompt injection where applicable.

# User Experience Requirements

The interface shall:

- Support desktop-first responsive layouts.
- Maintain consistent navigation.
- Display loading indicators during tool execution.
- Show meaningful error messages.
- Provide downloadable reports.
- Preserve chat history during a session.
- Minimize unnecessary user inputs.

# Future Enhancements

Potential future improvements include:

- Brokerage account integration
- Live portfolio synchronization
- Tax estimation
- Retirement planning
- Goal tracking
- Watchlists
- AI-generated portfolio optimization
- Real-time market alerts
- Multi-language support
- Mobile application

# Expected Outcome

The completed prototype should demonstrate:

- Successful Model Context Protocol implementation.
- AI-assisted orchestration of financial tools.
- Modular and maintainable software architecture.
- Practical BFSI use case.
- Clean user experience suitable for demonstration.
- Extensible design for future development.

# AI Implementation Guidelines

This specification is intended to guide both human developers and AI coding agents.

Implementation should follow these principles:

- Preserve the NitroStack Starter architecture.
- Avoid unnecessary modifications to generated project files.
- Build features incrementally.
- Keep business logic inside MCP tools.
- Maintain separation between AI orchestration and business logic.
- Prefer reusable modules over duplicated code.
- Follow consistent naming conventions.
- Ensure each feature is functional before implementing the next.
- Maintain readable, documented, and modular code.
- Validate functionality continuously throughout development.

The implementation priorities are:

1. Correctness
2. Modularity
3. Maintainability
4. Developer Experience
5. Demonstrable MCP Orchestration
