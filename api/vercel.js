// Vercel helper file
// This ensures that the API routes are correctly recognized by Vercel

module.exports = (req, res) => {
    // This file doesn't do anything by itself
    // It just ensures that the /api directory is correctly recognized by Vercel
    res.status(200).json({
        message: 'Vercel API configuration is working',
        api_version: '1.0.0'
    });
}; 