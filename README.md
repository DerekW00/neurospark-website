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

# NeuroSpark Website

NeuroSpark is a comprehensive ADHD management tool that helps people with ADHD reach their goals by providing personalized coaching, accountability, and productivity features.

## Development

1. Install dependencies:
```bash
npm install
```

2. Copy the environment variable example file and update values as needed:
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

## Azure Deployment

### Frontend Deployment (Static Web App)

1. Create an Azure Static Web App in the Azure portal.

2. Configure the build settings:
   - Build Command: `npm run build`
   - Output Location: `dist`
   - API Location: `azure-function` (if deploying functions with the web app)

3. Connect your GitHub repository for CI/CD deployment.

### Backend Deployment (Azure Functions)

1. Navigate to the `azure-function` folder:
```bash
cd azure-function
```

2. Install Azure Functions Core Tools if not already installed:
```bash
npm install -g azure-functions-core-tools@4
```

3. Create a Function App in Azure portal.

4. Deploy the function app:
```bash
func azure functionapp publish YOUR_FUNCTION_APP_NAME
```

5. Configure environment variables in the Azure portal for your Function App.

## Environment Configuration

Important environment variables:

- `VITE_API_BASE_URL`: URL for your Azure Function API
- `VITE_ENABLE_ANALYTICS`: Enable/disable analytics
- `VITE_APP_VERSION`: Application version

See `.env.example` for all available environment variables.
