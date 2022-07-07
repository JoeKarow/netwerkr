import { z } from 'zod'
import { EmailWhereInputObjectSchema } from './EmailWhereInput.schema'

export const EmailDeleteManyInputObjectSchema = z.object({
	where: EmailWhereInputObjectSchema,
})
