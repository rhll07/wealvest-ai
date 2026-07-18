# WealVest AI Architecture

## Overview

WealVest AI follows a modular architecture based on the Model Context Protocol (MCP).

The application separates user interaction, AI orchestration, and business logic into independent layers.

This separation improves maintainability, extensibility, and makes financial tools reusable.

---

# High-Level Architecture

```
                Browser
                   │
                   ▼
      React + TypeScript Frontend
                   │
             REST / Streaming
                   │
                   ▼
          Express Backend API
                   │
                   ▼
              AI Gateway
                   │
                   ▼
        NitroStack MCP Client
                   │
                   ▼
       NitroStack MCP Server
                   │
 ┌─────────────────────────────────────┐
 │ Portfolio Analyzer                  │
 │ Investment Simulator                │
 │ Financial Calculator                │
 │ Market Intelligence                 │
 │ Risk Analyzer                       │
 │ Report Generator                    │
 └─────────────────────────────────────┘
```

---

# Layer Responsibilities

## Frontend

Responsible for:

- User Interface
- Dashboard
- Authentication
- Chat Interface
- Report Visualization
- API Communication

---

## Backend

Responsible for:

- REST APIs
- Authentication
- Session Management
- AI Gateway
- MCP Client

---

## AI Gateway

Responsible for:

- Prompt Construction
- Conversation Context
- Intent Analysis
- Tool Selection
- Response Generation

The gateway never performs financial calculations directly.

---

## MCP Server

Hosts independent financial tools.

Each tool follows the Single Responsibility Principle.

The server exposes tools through NitroStack MCP.

---

# Request Lifecycle

User Prompt

↓

Express API

↓

AI Gateway

↓

Intent Analysis

↓

Required MCP Tools

↓

Tool Execution

↓

Structured Results

↓

AI Response

↓

Frontend

---

# Design Principles

- Modular architecture
- Clear separation of concerns
- Reusable business logic
- Stateless APIs
- Deterministic financial calculations
- Extensible MCP tools

---

# Future Expansion

The architecture allows future integration of:

- Live Market APIs
- Brokerage Platforms
- Authentication Providers
- Cloud Storage
- Portfolio Synchronization
