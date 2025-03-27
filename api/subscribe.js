// Subscription handler
const handler = require('./_handler');

// Form submission handler
const subscribeHandler = async (req, res) => {
    // Only allow POST method
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // Validate request body
        const { name, email, phone, submittedAt, source } = req.body;

        // Basic validation
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required fields' });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // Create a record object
        const subscriber = {
            name,
            email,
            phone: phone || '',
            submittedAt: submittedAt || new Date().toISOString(),
            source: source || 'interest-form',
            timestamp: Date.now()
        };

        // For now, just log the data
        // In a production environment, you'd save this to a database
        console.log('Form submission received:', subscriber);

        /**
         * Options for storing this data in Vercel:
         * 1. Vercel KV (Redis) - https://vercel.com/docs/storage/vercel-kv
         * 2. Vercel Postgres - https://vercel.com/docs/storage/vercel-postgres
         * 3. Send to a 3rd-party service like Airtable, Google Sheets, etc.
         * 4. Use a third-party service like Supabase, Firebase, etc.
         */

        // Return success response
        return res.status(200).json({ message: 'Subscription successful' });

    } catch (error) {
        console.error('Error processing form submission:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Helper function to validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Export with error handling wrapper
module.exports = handler(subscribeHandler); 