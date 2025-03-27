import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Ensure index.html is in the right place
const rootIndexPath = path.join(process.cwd(), 'index.html');
if (!fs.existsSync(rootIndexPath)) {
    console.error('Error: index.html not found in the root directory');
    process.exit(1);
}

// Run the Vite build command
console.log('Building project with Vite...');
exec('vite build', (error, stdout, stderr) => {
    if (error) {
        console.error(`Build error: ${error.message}`);
        process.exit(1);
    }

    if (stderr) {
        console.error(`Build stderr: ${stderr}`);
    }

    console.log(`Build stdout: ${stdout}`);
    console.log('Build completed successfully!');
}); 