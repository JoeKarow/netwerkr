import { z } from 'zod'
import { SocialMediaObjectEqualityInputObjectSchema } from './SocialMediaObjectEqualityInput.schema'
import { SocialMediaWhereInputObjectSchema } from './SocialMediaWhereInput.schema'

///@ts-ignore
export const SocialMediaCompositeListFilterObjectSchema = z.object({
	equals: z.array(SocialMediaObjectEqualityInputObjectSchema),
	every: SocialMediaWhereInputObjectSchema?.optional(),
	some: SocialMediaWhereInputObjectSchema?.optional(),
	none: SocialMediaWhereInputObjectSchema?.optional(),
	isEmpty: z.boolean()?.optional(),
	isSet: z.boolean()?.optional(),
})
