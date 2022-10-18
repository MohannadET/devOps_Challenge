module.exports.handler = async (event) => {
    console.log('Event: ', event);
    let responseMessage = `
    Welcome to our demo API, here are the details of your request:
    
    Headers: ${JSON.stringify(event.headers)}

    Method: ${event.httpMethod} Body: ${event.body ? event.body : 'Body is empty'}`;
  
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: responseMessage,
    }
  }