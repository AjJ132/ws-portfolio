import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({ region: 'us-east-1' });
const ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'https://aj-johnson.com',
    'https://www.aj-johnson.com'
];

export const handler = async (event) => {
    const origin = event.headers.origin || '';
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
    
    // Handle OPTIONS requests for CORS
    if (event.requestContext.http.method === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": allowedOrigin,
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST,OPTIONS",
                "Access-Control-Allow-Credentials": "true"
            },
            body: ''
        };
    }

    try {
        const body = JSON.parse(event.body);
        const { name, email, subject, message } = body;
        
        if (!name || !email || !subject || !message) {
            return {
                statusCode: 400,
                headers: getCorsHeaders(allowedOrigin),
                body: JSON.stringify({ message: 'All fields are required' })
            };
        }

        const command = new SendEmailCommand({
            Destination: {
                ToAddresses: ['aj132@icloud.com']
            },
            Message: {
                Body: {
                    Text: {
                        Data: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
                    }
                },
                Subject: {
                    Data: `Portfolio Contact Form: ${subject}`
                }
            },
            Source: 'aj132@icloud.com'
        });

        await sesClient.send(command);

        return {
            statusCode: 200,
            headers: getCorsHeaders(allowedOrigin),
            body: JSON.stringify({ message: 'Thanks for your message! I\'ll get back to you soon.' })
        };
    } catch (err) {
        console.error('Error:', err);
        
        // Handle SES verification error specifically
        if (err.Error?.Code === 'MessageRejected' && err.Error?.Message?.includes('not verified')) {
            return {
                statusCode: 500,
                headers: getCorsHeaders(allowedOrigin),
                body: JSON.stringify({ 
                    message: 'Email service not properly configured. Please try again later or contact the administrator.',
                    error: 'SES_VERIFICATION_REQUIRED'
                })
            };
        }
        
        return {
            statusCode: 500,
            headers: getCorsHeaders(allowedOrigin),
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};

const getCorsHeaders = (origin) => ({
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
    "Access-Control-Allow-Credentials": "true"
});