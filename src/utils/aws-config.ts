import { S3Client } from '@aws-sdk/client-s3';

export const s3Client = new S3Client({
  region: process.env.AMZN_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AMZN_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AMZN_SECRET_ACCESS_KEY || '',
  },
});


