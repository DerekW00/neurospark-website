# NeuroSpark API

This folder contains the Vercel Serverless Functions for the NeuroSpark website.

## Available Endpoints

- **Subscribe**: Handles form submissions for users interested in being notified about public testing.
  - Route: `/api/subscribe`
  - Method: `POST`
  - Required Fields: `name`, `email`
  - Optional Fields: `phone`, `submittedAt`, `source`

## Local Development

1. Run the development server with:

```bash
npm run dev
```

2. The API will be available at `http://localhost:3000/api/subscribe` (or whichever port your Vite dev server uses)

## Database Options

For storing form submissions in production, consider using:

1. **Vercel KV (Redis)**: Good for smaller datasets, quick lookups
   - [Documentation](https://vercel.com/docs/storage/vercel-kv)

2. **Vercel Postgres**: SQL database for more complex data relationships
   - [Documentation](https://vercel.com/docs/storage/vercel-postgres)

3. **Third-party services**: 
   - Supabase
   - Firebase
   - MongoDB Atlas
   - Airtable

## Deployment

Deploys automatically when pushed to the main branch on your Vercel-connected repository.

For manual deployment:

```bash
vercel
``` 