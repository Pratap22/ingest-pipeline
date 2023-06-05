// index.js
exports.handler = async (event) => {
    try {
      // Process each message in the SQS event
      for (const record of event.Records) {
        const message = JSON.parse(record.body);
        
        // Process the message and perform the desired actions
        await processMessage(message);
      }
  
      return {
        statusCode: 200,
        body: "Messages processed successfully",
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Error occurred while processing messages",
      };
    }
  };
  
  // Function to process a single message from SQS
  async function processMessage(message) {
    // Your logic to process the message and perform the desired actions
    // For example:
    console.log("Processing message:", message);
    // ...
  }
  