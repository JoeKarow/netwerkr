import { z } from 'zod'
import { ProfileObjectEqualityInputObjectSchema } from './ProfileObjectEqualityInput.schema'
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

///@ts-ignore
export const ProfileCompositeListFilterObjectSchema = z.object({
	equals: z.array(ProfileObjectEqualityInputObjectSchema),
	every: ProfileWhereInputObjectSchema?.optional(),
	some: ProfileWhereInputObjectSchema?.optional(),
	none: ProfileWhereInputObjectSchema?.optional(),
	isEmpty: z.boolean()?.optional(),
	isSet: z.boolean()?.optional(),
})
