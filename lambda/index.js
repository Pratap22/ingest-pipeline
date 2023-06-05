// index.js
exports.handler = async (event) => {
  try {
    const payload = processEvent(event);

    console.log("event :: ", JSON.stringify(event));
    const queryParams = event.queryStringParameters;
    const routeParams = event.pathParameters;

    console.log({queryParams, routeParams});
    
    return {
      statusCode: 200,
      body: "Events triggered successfully",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Error occurred while processing the request",
    };
  }
};

function processEvent(event) {
  const payload = {
    eventId: event.id,
    eventData: event.data,
  };

  return payload;
}
