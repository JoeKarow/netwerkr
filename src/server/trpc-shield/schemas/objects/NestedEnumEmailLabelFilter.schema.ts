import { z } from 'zod'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'

///@ts-ignore
export const NestedEnumEmailLabelFilterObjectSchema = z.object({
	equals: EmailLabelSchema?.optional(),
	in: EmailLabelSchema,
	notIn: EmailLabelSchema,
	not: z
		.union([
			EmailLabelSchema,
			z.lazy(() => NestedEnumEmailLabelFilterObjectSchema),
		])
		?.optional(),
})
