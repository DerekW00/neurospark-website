// Handler for Vercel serverless function
module.exports = (req, res) => {
    res.status(200).json({
        message: 'API is working!',
        endpoints: ['/api/subscribe']
    });
} 