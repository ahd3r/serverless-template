import middy from '@middy/core'
import { ProxyHandler } from 'aws-lambda'
import { logger, formatQueryResponse } from '@payconstruct/pp-service-utils'
import { listUserAddresses } from '../../../data/address-repo'
import httpErrorHandler from '@middy/http-error-handler'
// import { formatQueryResponse } from '../../../utils/format-response'

const getUerAndAddresses: ProxyHandler = async event => {
  logger.info('testGet Event', JSON.stringify(event))
  if (!event.pathParameters || !event.pathParameters.userId) {
    logger.error(`UserId is required and ${event.pathParameters} is invalid`, { userId: event.pathParameters })
    throw new Error('Invalid path parameters')
  }
  const { userId } = event.pathParameters
  const result = await listUserAddresses(userId)
  return {
    statusCode: 200,
    body: JSON.stringify(formatQueryResponse(result, 'kind')),
  }
}

export const main = middy(getUerAndAddresses).use(httpErrorHandler())
