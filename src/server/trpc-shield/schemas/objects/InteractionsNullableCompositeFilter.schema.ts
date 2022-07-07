import { z } from 'zod'
import { InteractionsObjectEqualityInputObjectSchema } from './InteractionsObjectEqualityInput.schema'
import { InteractionsWhereInputObjectSchema } from './InteractionsWhereInput.schema'

///@ts-ignore
export const InteractionsNullableCompositeFilterObjectSchema = z.object({
	equals: InteractionsObjectEqualityInputObjectSchema?.optional().nullable(),
	is: InteractionsWhereInputObjectSchema?.optional().nullable(),
	isNot: InteractionsWhereInputObjectSchema?.optional().nullable(),
	isSet: z.boolean()?.optional(),
})
