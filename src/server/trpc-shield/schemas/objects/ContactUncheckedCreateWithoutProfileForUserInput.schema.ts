import { z } from 'zod'
import { ContactEmailUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './ContactEmailUncheckedCreateNestedManyWithoutContactInput.schema'
import { ContactPhoneUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './ContactPhoneUncheckedCreateNestedManyWithoutContactInput.schema'
import { SocialMediaUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './SocialMediaUncheckedCreateNestedManyWithoutContactInput.schema'
import { InteractionsUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './InteractionsUncheckedCreateNestedManyWithoutContactInput.schema'

export const ContactUncheckedCreateWithoutProfileForUserInputObjectSchema =
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
		interactions:
			InteractionsUncheckedCreateNestedManyWithoutContactInputObjectSchema?.optional(),
		onTwitterList: z.boolean(),
		associatedUserId: z.string(),
		createdAt: z.date()?.optional().nullable(),
		updatedAt: z.date()?.optional().nullable(),
	})
