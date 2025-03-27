# NeuroSpark API

This folder contains the Azure Functions for the NeuroSpark website.

## Available Functions

- **Subscribe**: Handles form submissions for users interested in being notified about public testing.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the local development server:
```bash
func start
```

## Deployment

1. Deploy to Azure Functions:
```bash
func azure functionapp publish YOUR_FUNCTION_APP_NAME
```

2. Set up environment variables in Azure Portal:
   - Navigate to your Function App
   - Go to Configuration
   - Add Application settings:
     - `AzureWebJobsStorage`: Connection string to your Azure Storage account
     - Other environment-specific variables

## Table Storage

The subscribe function stores data in an Azure Table Storage table named `subscribers`. Make sure your Function App has access to an Azure Storage account with this table created. 