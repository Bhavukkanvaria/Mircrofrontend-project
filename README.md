# Microfrontends Implementation Showcase

A comprehensive demonstration of different Microfrontend architectures in React, showcasing various implementation approaches and state management strategies. This repository serves as a practical guide to understanding how microfrontends can be implemented in different scenarios.

## 🚀 Projects Overview

### 1. Enterprise Dashboard (NPM Workspaces)
An enterprise-grade implementation using NPM workspaces and Module Federation, demonstrating:
- Workspace-based architecture
- Multiple microfrontends (Host, Auth, Analytics)
- Shared component library
- Parallel execution using concurrent mode

[View Enterprise Dashboard Project](./enterprise-dashboard2)

### 2. React Microfrontends
A pure React implementation showing:
- Basic Module Federation setup
- Three applications:
  - Host application
  - Shared components
  - TodoList feature
- Runtime integration of independently deployable applications

[View React Microfrontends Project](./MFEs-with-react)

### 3. Redux Microfrontends
Advanced implementation incorporating Redux for state management:
- Centralized state management across microfrontends
- Host and Shared applications
- Integration of Redux store across different applications
- State sharing between microfrontends

[View Redux Microfrontends Project](./MFEs-with-redux)


## 🚦 Getting Started

Each project can be run independently. Navigate to the respective project directory and follow the setup instructions in their README files.

### Prerequisites
- Node.js (v14 or higher)
- NPM (v7 or higher)
- Basic understanding of React and modern JavaScript

### Running the Projects

#### Enterprise Dashboard
```bash
cd enterprise-dashboard2
npm install
npm start
```

#### React Microfrontends
```bash
cd MFEs-with-react
# Navigate to each subdirectory (host, shared, todolist) and:
npm install
npm start
```

#### Redux Microfrontends
```bash
cd MFEs-with-redux
# Navigate to each subdirectory (host, shared) and:
npm install
npm start
```