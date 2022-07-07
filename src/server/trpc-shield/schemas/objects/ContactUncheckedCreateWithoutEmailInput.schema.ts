import { z } from 'zod'
import { ContactPhoneUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './ContactPhoneUncheckedCreateNestedManyWithoutContactInput.schema'
import { SocialMediaUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './SocialMediaUncheckedCreateNestedManyWithoutContactInput.schema'
import { InteractionsUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './InteractionsUncheckedCreateNestedManyWithoutContactInput.schema'
import { UserUncheckedCreateNestedOneWithoutProfileInputObjectSchema } from './UserUncheckedCreateNestedOneWithoutProfileInput.schema'

export const ContactUncheckedCreateWithoutEmailInputObjectSchema = z.object({
	id: z.string()?.optional(),
	firstName: z.string()?.optional().nullable(),
	lastName: z.string()?.optional().nullable(),
	phone:
		ContactPhoneUncheckedCreateNestedManyWithoutContactInputObjectSchema?.optional(),
	photo: z.string(),
	socialMedia:
		SocialMediaUncheckedCreateNestedManyWithoutContactInputObjectSchema?.optional(),
	interactions:
		InteractionsUncheckedCreateNestedManyWithoutContactInputObjectSchema?.optional(),
	onTwitterList: z.boolean(),
	associatedUserId: z.string(),
	profileForUser:
		UserUncheckedCreateNestedOneWithoutProfileInputObjectSchema?.optional(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
