import { handler } from './index.js';
import fs from 'fs/promises';

async function runTest() {
  try {
    // Read the test event
    const testEvent = JSON.parse(
      await fs.readFile('./test-event.json', 'utf8')
    );

    // Run the handler
    const response = await handler(testEvent);
    
    // Pretty print the response
    console.log('Response:', JSON.stringify(response, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

runTest();