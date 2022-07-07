import { z } from 'zod'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { ContactPhoneUpdateManyWithoutContactInputObjectSchema } from './ContactPhoneUpdateManyWithoutContactInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { SocialMediaUpdateManyWithoutContactInputObjectSchema } from './SocialMediaUpdateManyWithoutContactInput.schema'
import { InteractionsUpdateManyWithoutContactInputObjectSchema } from './InteractionsUpdateManyWithoutContactInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { UserUpdateOneRequiredWithoutContactsInputObjectSchema } from './UserUpdateOneRequiredWithoutContactsInput.schema'
import { UserUpdateOneWithoutProfileInputObjectSchema } from './UserUpdateOneWithoutProfileInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const ContactUpdateWithoutEmailInputObjectSchema = z.object({
	firstName: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	lastName: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	phone: ContactPhoneUpdateManyWithoutContactInputObjectSchema?.optional(),
	photo: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	socialMedia: SocialMediaUpdateManyWithoutContactInputObjectSchema?.optional(),
	interactions:
		InteractionsUpdateManyWithoutContactInputObjectSchema?.optional(),
	onTwitterList: z
		.union([z.boolean(), BoolFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	associatedUser:
		UserUpdateOneRequiredWithoutContactsInputObjectSchema?.optional(),
	profileForUser: UserUpdateOneWithoutProfileInputObjectSchema?.optional(),
	createdAt: z
		.union([
			z.date(),
			NullableDateTimeFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	updatedAt: z
		.union([
			z.date(),
			NullableDateTimeFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
})