#!/bin/bash

# Print environment information
echo "Current directory: $(pwd)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
ls -la

# Make sure we're in the root directory
echo "Installing dependencies..."
npm install

# Run the build
echo "Building with Vite..."
npx vite build

# Check the build output
echo "Build output:"
ls -la dist

echo "Build completed!" 