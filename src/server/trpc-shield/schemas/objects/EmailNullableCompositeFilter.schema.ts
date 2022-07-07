import { z } from 'zod'
import { EmailObjectEqualityInputObjectSchema } from './EmailObjectEqualityInput.schema'
import { EmailWhereInputObjectSchema } from './EmailWhereInput.schema'

///@ts-ignore
export const EmailNullableCompositeFilterObjectSchema = z.object({
	equals: EmailObjectEqualityInputObjectSchema?.optional().nullable(),
	is: EmailWhereInputObjectSchema?.optional().nullable(),
	isNot: EmailWhereInputObjectSchema?.optional().nullable(),
	isSet: z.boolean()?.optional(),
})
