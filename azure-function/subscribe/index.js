module.exports = async function (context, req) {
    context.log('Processing subscription request');

    try {
        // Validate request
        if (!req.body) {
            context.res = {
                status: 400,
                body: { message: "Request body is required" }
            };
            return;
        }

        const { name, email, phone } = req.body;

        // Basic validation
        if (!name || !email) {
            context.res = {
                status: 400,
                body: { message: "Name and email are required fields" }
            };
            return;
        }

        if (!validateEmail(email)) {
            context.res = {
                status: 400,
                body: { message: "Invalid email format" }
            };
            return;
        }

        // Generate unique RowKey
        const timestamp = new Date().getTime();
        const rowKey = `${timestamp}_${Math.random().toString(36).substring(2, 15)}`;

        // Create item for Table Storage
        const subscriber = {
            PartitionKey: "Subscribers",
            RowKey: rowKey,
            name: name,
            email: email,
            phone: phone || "",
            submittedAt: new Date().toISOString()
        };

        // Add to table storage
        context.bindings.outputTable = subscriber;

        // Return success
        context.res = {
            status: 200,
            body: { message: "Subscription successful" }
        };

    } catch (error) {
        context.log.error('Error processing request:', error);

        context.res = {
            status: 500,
            body: { message: "Internal server error" }
        };
    }
};

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
} 