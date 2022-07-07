import { z } from 'zod'
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'
import { ProfileUpdateInputObjectSchema } from './ProfileUpdateInput.schema'

export const ProfileUpdateManyInputObjectSchema = z.object({
	where: ProfileWhereInputObjectSchema,
	data: ProfileUpdateInputObjectSchema,
})
