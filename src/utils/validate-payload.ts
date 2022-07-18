import { ZodSchema } from 'zod'

/** Util function that validates a payload against a zod Schemas  */
export const validatePayload = async (schema: ZodSchema, payload: Record<string, unknown>) => schema.parseAsync(payload)
