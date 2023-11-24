import middy from '@middy/core';
import { ProxyHandler } from 'aws-lambda';

import { logger } from '../../utils/logger';
import { cleanAndCopyObject } from '../../utils/object';

const healthcheckHandler: ProxyHandler = async (event) => {
  logger.info(
    cleanAndCopyObject({
      method: event.httpMethod,
      queryStringParameters: event.queryStringParameters,
      pathParameters: event.pathParameters,
      body: event.body,
      auth: event.headers.authorization,
      path: event.path
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ data: 'Running...' })
  };
};

export const handler = middy(healthcheckHandler);
