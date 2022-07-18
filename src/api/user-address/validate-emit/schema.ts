import { z } from 'zod'

export const userSchema = z
  .object({
    name: z.string(),
    lastName: z.string(),
    email: z.string().email(),
  })
  .strict()
export type userPayload = z.infer<typeof userSchema>
