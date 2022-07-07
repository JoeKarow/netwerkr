import { z } from 'zod'
import { ContactEmailCreateNestedManyWithoutContactInputObjectSchema } from './ContactEmailCreateNestedManyWithoutContactInput.schema'
import { ContactPhoneCreateNestedManyWithoutContactInputObjectSchema } from './ContactPhoneCreateNestedManyWithoutContactInput.schema'
import { SocialMediaCreateNestedManyWithoutContactInputObjectSchema } from './SocialMediaCreateNestedManyWithoutContactInput.schema'
import { InteractionsCreateNestedManyWithoutContactInputObjectSchema } from './InteractionsCreateNestedManyWithoutContactInput.schema'
import { UserCreateNestedOneWithoutContactsInputObjectSchema } from './UserCreateNestedOneWithoutContactsInput.schema'
import { UserCreateNestedOneWithoutProfileInputObjectSchema } from './UserCreateNestedOneWithoutProfileInput.schema'

export const ContactCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	firstName: z.string()?.optional().nullable(),
	lastName: z.string()?.optional().nullable(),
	email:
		ContactEmailCreateNestedManyWithoutContactInputObjectSchema?.optional(),
	phone:
		ContactPhoneCreateNestedManyWithoutContactInputObjectSchema?.optional(),
	photo: z.string(),
	socialMedia:
		SocialMediaCreateNestedManyWithoutContactInputObjectSchema?.optional(),
	interactions:
		InteractionsCreateNestedManyWithoutContactInputObjectSchema?.optional(),
	onTwitterList: z.boolean(),
	associatedUser: UserCreateNestedOneWithoutContactsInputObjectSchema,
	profileForUser:
		UserCreateNestedOneWithoutProfileInputObjectSchema?.optional(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
