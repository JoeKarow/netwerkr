import { z } from 'zod'
import { EmailWhereInputObjectSchema } from './EmailWhereInput.schema'
import { EmailUpdateInputObjectSchema } from './EmailUpdateInput.schema'

export const EmailUpdateManyInputObjectSchema = z.object({
	where: EmailWhereInputObjectSchema,
	data: EmailUpdateInputObjectSchema,
})
