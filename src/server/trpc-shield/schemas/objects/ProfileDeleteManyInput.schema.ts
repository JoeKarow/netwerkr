import { z } from 'zod'
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

export const ProfileDeleteManyInputObjectSchema = z.object({
	where: ProfileWhereInputObjectSchema,
})
