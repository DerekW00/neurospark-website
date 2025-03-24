# NeuroSpark

A cross-platform (iOS and web) application built with a monorepo architecture.

## Project Structure

This project is organized as a monorepo using Yarn workspaces:

- `packages/shared` - Shared code between platforms (models, utilities, interfaces)
- `packages/web` - Web application built with React and Vite
- `packages/ios` - iOS application built with React Native
- `packages/config` - Shared configuration files (TypeScript, ESLint)

## Getting Started

### Prerequisites

- Node.js (v16+)
- Yarn
- For iOS: XCode and CocoaPods

### Installation

```bash
# Install dependencies for all packages
yarn install
```

### Development

```bash
# Start web development server
yarn dev:web

# Start iOS development server
yarn dev:ios
```

### Building

```bash
# Build web application
yarn build:web

# Build iOS application
yarn build:ios
```

## Architecture

The application follows a monorepo architecture with shared code between platforms. The shared package contains platform-agnostic code like data models, utilities, and service interfaces, while the platform-specific packages (web, iOS) implement the UI and platform-specific services.

Firebase integration is handled through a common interface defined in the shared package, with platform-specific implementations in each application package.
