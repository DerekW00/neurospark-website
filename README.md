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

## Vercel Deployment

### Deployment Steps

1. Connect your GitHub repository to Vercel.

2. Configure the project settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. Add environment variables from your `.env` file to your Vercel project settings.

4. Deploy your application. Vercel will automatically build and deploy your application whenever you push to your default branch.

### API Endpoints

This project uses Vercel Serverless Functions for backend functionality. The API endpoints are located in the `api` directory.

Available endpoints:
- `/api/subscribe` - Handles form submissions for waitlist signups

See the `api/README.md` file for more details about API endpoints.

## Environment Configuration

Important environment variables:

- `VITE_API_BASE_URL`: URL for your API (defaults to `/api` for Vercel deployment)
- `VITE_ENABLE_ANALYTICS`: Enable/disable analytics
- `VITE_APP_VERSION`: Application version

See `.env.example` for all available environment variables.
