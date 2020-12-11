'use strict';

module.exports.endpointGet = async event => {

    if(  event.queryStringParameters &&  event.queryStringParameters.name) {
        return{
            statusCode: 200,
            body: JSON.stringify(
                {
                    message: 'Hey ' + event.queryStringParameters.name + ', nice to see you in GET',
                },
                null,
                2
            ),
        }
    }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Lambda in my 1st Endpoint - GET',
        input: event,
      },
      null,
      2
    ),
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
};


module.exports.endpointPost = async event => {

    if(  event.queryStringParameters &&  event.queryStringParameters.name) {
        return{
            statusCode: 200,
            body: JSON.stringify(
                {
                    message: 'Hey ' + event.queryStringParameters.name + ', nice to see you in POST',
                },
                null,
                2
            ),
        }
    }

    if(event.httpMethod === "POST" && event.body) {
        let json = JSON.parse(event.body);
        return{
            statusCode: 200,
            body: JSON.stringify(
                {
                    message: 'Receive JSON object from POST request',
                    object: json,
                },
                null,
                2
            ),
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Lambda in my 2nd Endpoint - POST',
                input: event,
            },
            null,
            2
        ),
    };
};