# NeuroSpark

NeuroSpark is a comprehensive ADHD management tool designed to help people with ADHD reach their goals through personalized coaching, accountability features, and productivity tools.

## Live Demo

Visit the live demo: [https://derekw00.github.io/neurospark-website/](https://derekw00.github.io/neurospark-website/)

## Features

- **AI-powered coaching**: Get personalized guidance tailored to your needs
- **Task breakdown**: Transform overwhelming tasks into manageable steps
- **Accountability tools**: Stay on track with reminders and progress tracking
- **ADHD-friendly interface**: Designed specifically for neurodivergent users
- **Responsive design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- React 18 with TypeScript
- Vite for fast development and optimized builds
- TailwindCSS for styling
- React Router for navigation
- Radix UI components for accessible UI elements
- React Query for data fetching
- GitHub Pages for deployment

## Project Structure

```
neurospark-website/
├── public/              # Static assets
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── services/        # API and service integrations
│   └── styles/          # Global CSS styles
├── api/                 # API endpoints
└── .github/workflows/   # GitHub Actions workflows
```

## Development

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/DerekW00/neurospark-website.git
cd neurospark-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

### Building for Production

Build the project for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Deployment

### GitHub Pages

Deploy to GitHub Pages:
```bash
npm run deploy
```

This runs the build script and pushes the build output to the `gh-pages` branch.

### Automatic Deployment

The project is set up with GitHub Actions to automatically deploy to GitHub Pages whenever changes are pushed to the main branch. See the workflow configuration in `.github/workflows/deploy.yml`.

## Environment Variables

Copy the example environment file and configure as needed:
```bash
cp .env.example .env
```

Available environment variables:
- `VITE_API_BASE_URL`: Base URL for API requests
- `VITE_ENABLE_ANALYTICS`: Enable/disable analytics
- `VITE_APP_VERSION`: Application version

## License

This project is for demonstration purposes only.
