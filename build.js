const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure index.html is in the right place
const rootIndexPath = path.join(process.cwd(), 'index.html');
console.log(`Checking for index.html at: ${rootIndexPath}`);
if (!fs.existsSync(rootIndexPath)) {
    console.error('Error: index.html not found in the root directory');
    process.exit(1);
}

// Log environment info
console.log('Current directory:', process.cwd());
console.log('Directory contents:');
console.log(fs.readdirSync(process.cwd()).join(', '));

// Use npx to ensure we're using local binaries
console.log('Building project with Vite...');
exec('npx vite build', (error, stdout, stderr) => {
    if (error) {
        console.error(`Build error: ${error.message}`);
        process.exit(1);
    }

    if (stderr) {
        console.error(`Build stderr: ${stderr}`);
    }

    console.log(`Build stdout: ${stdout}`);
    console.log('Build completed successfully!');

    // Verify dist directory contents
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
        console.log('Dist directory contents:');
        console.log(fs.readdirSync(distPath).join(', '));
    } else {
        console.error('Dist directory not found after build!');
    }
}); 