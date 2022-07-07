import { z } from 'zod'
import { ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema'
import { ContactOrderByWithRelationInputObjectSchema } from './objects/ContactOrderByWithRelationInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema'
import { ContactScalarFieldEnumSchema } from './enums/ContactScalarFieldEnum.schema'

export const ContactFindManySchema = z.object({
	where: ContactWhereInputObjectSchema.optional(),
	orderBy: ContactOrderByWithRelationInputObjectSchema.optional(),
	cursor: ContactWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(ContactScalarFieldEnumSchema).optional(),
})
