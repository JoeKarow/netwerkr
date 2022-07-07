import { z } from 'zod'
import { PhoneObjectEqualityInputObjectSchema } from './PhoneObjectEqualityInput.schema'
import { PhoneWhereInputObjectSchema } from './PhoneWhereInput.schema'

///@ts-ignore
export const PhoneNullableCompositeFilterObjectSchema = z.object({
	equals: PhoneObjectEqualityInputObjectSchema?.optional().nullable(),
	is: PhoneWhereInputObjectSchema?.optional().nullable(),
	isNot: PhoneWhereInputObjectSchema?.optional().nullable(),
	isSet: z.boolean()?.optional(),
})
