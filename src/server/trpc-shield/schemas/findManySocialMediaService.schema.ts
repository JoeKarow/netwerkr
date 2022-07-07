import { z } from 'zod'
import { SocialMediaServiceWhereInputObjectSchema } from './objects/SocialMediaServiceWhereInput.schema'
import { SocialMediaServiceOrderByWithRelationInputObjectSchema } from './objects/SocialMediaServiceOrderByWithRelationInput.schema'
import { SocialMediaServiceWhereUniqueInputObjectSchema } from './objects/SocialMediaServiceWhereUniqueInput.schema'
import { SocialMediaServiceScalarFieldEnumSchema } from './enums/SocialMediaServiceScalarFieldEnum.schema'

export const SocialMediaServiceFindManySchema = z.object({
	where: SocialMediaServiceWhereInputObjectSchema.optional(),
	orderBy: SocialMediaServiceOrderByWithRelationInputObjectSchema.optional(),
	cursor: SocialMediaServiceWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(SocialMediaServiceScalarFieldEnumSchema).optional(),
})
