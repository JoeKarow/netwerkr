import { z } from 'zod'
import { ContactPhoneWhereInputObjectSchema } from './objects/ContactPhoneWhereInput.schema'
import { ContactPhoneOrderByWithAggregationInputObjectSchema } from './objects/ContactPhoneOrderByWithAggregationInput.schema'
import { ContactPhoneScalarWhereWithAggregatesInputObjectSchema } from './objects/ContactPhoneScalarWhereWithAggregatesInput.schema'
import { ContactPhoneScalarFieldEnumSchema } from './enums/ContactPhoneScalarFieldEnum.schema'

export const ContactPhoneGroupBySchema = z.object({
	where: ContactPhoneWhereInputObjectSchema.optional(),
	orderBy: ContactPhoneOrderByWithAggregationInputObjectSchema,
	having: ContactPhoneScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(ContactPhoneScalarFieldEnumSchema),
})
