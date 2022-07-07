import { z } from 'zod'
import { ContactEmailUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './ContactEmailUncheckedCreateNestedManyWithoutContactInput.schema'
import { ContactPhoneUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './ContactPhoneUncheckedCreateNestedManyWithoutContactInput.schema'
import { SocialMediaUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './SocialMediaUncheckedCreateNestedManyWithoutContactInput.schema'
import { UserUncheckedCreateNestedOneWithoutProfileInputObjectSchema } from './UserUncheckedCreateNestedOneWithoutProfileInput.schema'

export const ContactUncheckedCreateWithoutInteractionsInputObjectSchema =
	z.object({
		id: z.string()?.optional(),
		firstName: z.string()?.optional().nullable(),
		lastName: z.string()?.optional().nullable(),
		email:
			ContactEmailUncheckedCreateNestedManyWithoutContactInputObjectSchema?.optional(),
		phone:
			ContactPhoneUncheckedCreateNestedManyWithoutContactInputObjectSchema?.optional(),
		photo: z.string(),
		socialMedia:
			SocialMediaUncheckedCreateNestedManyWithoutContactInputObjectSchema?.optional(),
		onTwitterList: z.boolean(),
		associatedUserId: z.string(),
		profileForUser:
			UserUncheckedCreateNestedOneWithoutProfileInputObjectSchema?.optional(),
		createdAt: z.date()?.optional().nullable(),
		updatedAt: z.date()?.optional().nullable(),
	})
