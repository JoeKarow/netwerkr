import { z } from 'zod'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'

///@ts-ignore
export const NestedEnumPhoneLabelFilterObjectSchema = z.object({
	equals: PhoneLabelSchema?.optional(),
	in: PhoneLabelSchema,
	notIn: PhoneLabelSchema,
	not: z
		.union([
			PhoneLabelSchema,
			z.lazy(() => NestedEnumPhoneLabelFilterObjectSchema),
		])
		?.optional(),
})
