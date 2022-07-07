import { z } from 'zod'
import { EmailCreateInputObjectSchema } from './EmailCreateInput.schema'
import { EmailUpdateManyInputObjectSchema } from './EmailUpdateManyInput.schema'
import { EmailDeleteManyInputObjectSchema } from './EmailDeleteManyInput.schema'

export const EmailListUpdateEnvelopeInputObjectSchema = z.object({
	set: z
		.union([
			EmailCreateInputObjectSchema,
			z.array(EmailCreateInputObjectSchema),
		])
		?.optional(),
	push: z
		.union([
			EmailCreateInputObjectSchema,
			z.array(EmailCreateInputObjectSchema),
		])
		?.optional(),
	updateMany: EmailUpdateManyInputObjectSchema?.optional(),
	deleteMany: EmailDeleteManyInputObjectSchema?.optional(),
})
