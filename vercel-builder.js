// @ts-check
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * This is a custom builder for Vercel to handle the monorepo structure
 */
function main() {
    console.log('Running Vercel custom builder script...');
    console.log('Current directory:', process.cwd());

    // Install dependencies
    console.log('Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });

    // Create a simple build script
    console.log('Building the application...');
    try {
        execSync('npx vite build', { stdio: 'inherit' });
        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }

    // Verify build output
    const distDir = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distDir)) {
        console.log('Build output exists:', fs.readdirSync(distDir));
    } else {
        console.error('No build output found!');
        process.exit(1);
    }

    console.log('Vercel build completed!');
}

main(); 