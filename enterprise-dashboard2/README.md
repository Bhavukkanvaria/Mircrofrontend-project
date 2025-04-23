# Enterprise Dashboard - Microfrontend Architecture

A small enterprise dashboard application built using microfrontend architecture with NPM workspaces. This project demonstrates a modular approach to building large-scale applications where different teams can work on separate features independently.

## Architecture Overview

This project uses a workspace-based microfrontend architecture with the following applications:

- **Host**: The container application that orchestrates all microfrontends
- **Auth**: Authentication and authorization microfrontend
- **Analytics**: Data visualization and analytics dashboard
- **Shared**: Common utilities, components, and services shared across microfrontends

![Architecture Overview](packages/Final%20Architecture%20Overview2.png)

## Data Flow

The application follows a structured data flow pattern between microfrontends:

![Data Flow Diagram](packages/Data%20Flow.png)

## Technology Stack

- **Module Federation**: For runtime integration of microfrontends
- **NPM Workspaces**: For managing multiple packages in a monorepo
- **React**: As the primary UI framework
- **Concurrent Mode**: For running multiple microfrontends in parallel


## Installation

1. Navigate to the project directory: `cd enterprise-dashboard2`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

This will concurrently run all microfrontends using `wsrun`.