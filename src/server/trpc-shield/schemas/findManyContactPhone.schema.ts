import { z } from 'zod'
import { ContactPhoneWhereInputObjectSchema } from './objects/ContactPhoneWhereInput.schema'
import { ContactPhoneOrderByWithRelationInputObjectSchema } from './objects/ContactPhoneOrderByWithRelationInput.schema'
import { ContactPhoneWhereUniqueInputObjectSchema } from './objects/ContactPhoneWhereUniqueInput.schema'
import { ContactPhoneScalarFieldEnumSchema } from './enums/ContactPhoneScalarFieldEnum.schema'

export const ContactPhoneFindManySchema = z.object({
	where: ContactPhoneWhereInputObjectSchema.optional(),
	orderBy: ContactPhoneOrderByWithRelationInputObjectSchema.optional(),
	cursor: ContactPhoneWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(ContactPhoneScalarFieldEnumSchema).optional(),
})
