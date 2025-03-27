// Simple status endpoint
const handler = require('./_handler');

// Base API handler
const apiHandler = (req, res) => {
    res.status(200).json({
        message: 'API is working!',
        endpoints: ['/api/subscribe']
    });
};

// Export with error handling wrapper
module.exports = handler(apiHandler); 