import { z } from 'zod'
import { SocialMediaWhereInputObjectSchema } from './objects/SocialMediaWhereInput.schema'
import { SocialMediaOrderByWithRelationInputObjectSchema } from './objects/SocialMediaOrderByWithRelationInput.schema'
import { SocialMediaWhereUniqueInputObjectSchema } from './objects/SocialMediaWhereUniqueInput.schema'
import { SocialMediaScalarFieldEnumSchema } from './enums/SocialMediaScalarFieldEnum.schema'

export const SocialMediaFindFirstSchema = z.object({
	where: SocialMediaWhereInputObjectSchema.optional(),
	orderBy: SocialMediaOrderByWithRelationInputObjectSchema.optional(),
	cursor: SocialMediaWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(SocialMediaScalarFieldEnumSchema).optional(),
})
