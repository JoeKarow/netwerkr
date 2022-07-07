import { z } from 'zod'
import { ContactPhoneWhereInputObjectSchema } from './objects/ContactPhoneWhereInput.schema'
import { ContactPhoneOrderByWithRelationInputObjectSchema } from './objects/ContactPhoneOrderByWithRelationInput.schema'
import { ContactPhoneWhereUniqueInputObjectSchema } from './objects/ContactPhoneWhereUniqueInput.schema'

export const ContactPhoneAggregateSchema = z.object({
	where: ContactPhoneWhereInputObjectSchema.optional(),
	orderBy: ContactPhoneOrderByWithRelationInputObjectSchema.optional(),
	cursor: ContactPhoneWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
