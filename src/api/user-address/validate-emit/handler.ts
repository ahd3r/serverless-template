// Import Middlewares
import middy from '@middy/core'
import { EventBridgeHandler } from 'aws-lambda'
import { validatePayload } from '../../../utils/validate-payload'
import { prepareEvent, sendEvents } from '@payconstruct/pp-service-utils/dist/aws/EventBridge'
import { userPayload, userSchema } from './schema'
import { successResponse } from '@payconstruct/pp-service-utils'
import { HttpGenericResponse } from '@payconstruct/pp-types/dist/requests/generic'

const emitEvent: EventBridgeHandler<'createUser', string, HttpGenericResponse> = async event => {
  const { EVENT_NAME = '', SERVICE_NAME = '' } = process.env
  const payload: userPayload = JSON.parse(event.detail)
  await validatePayload(userSchema, payload)
  const emittedEvent = prepareEvent(payload, EVENT_NAME, SERVICE_NAME)
  await sendEvents([emittedEvent])

  return successResponse({
    ...emittedEvent,
  })
}

export const main = middy(emitEvent)
