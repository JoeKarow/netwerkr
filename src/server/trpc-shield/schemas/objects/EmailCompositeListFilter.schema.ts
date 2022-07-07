import { z } from 'zod'
import { EmailObjectEqualityInputObjectSchema } from './EmailObjectEqualityInput.schema'
import { EmailWhereInputObjectSchema } from './EmailWhereInput.schema'

///@ts-ignore
export const EmailCompositeListFilterObjectSchema = z.object({
	equals: z.array(EmailObjectEqualityInputObjectSchema),
	every: EmailWhereInputObjectSchema?.optional(),
	some: EmailWhereInputObjectSchema?.optional(),
	none: EmailWhereInputObjectSchema?.optional(),
	isEmpty: z.boolean()?.optional(),
	isSet: z.boolean()?.optional(),
})
