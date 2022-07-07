import { z } from 'zod'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { ContactEmailUncheckedUpdateManyWithoutContactInputObjectSchema } from './ContactEmailUncheckedUpdateManyWithoutContactInput.schema'
import { ContactPhoneUncheckedUpdateManyWithoutContactInputObjectSchema } from './ContactPhoneUncheckedUpdateManyWithoutContactInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { SocialMediaUncheckedUpdateManyWithoutContactInputObjectSchema } from './SocialMediaUncheckedUpdateManyWithoutContactInput.schema'
import { InteractionsUncheckedUpdateManyWithoutContactInputObjectSchema } from './InteractionsUncheckedUpdateManyWithoutContactInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { UserUncheckedUpdateOneWithoutProfileInputObjectSchema } from './UserUncheckedUpdateOneWithoutProfileInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const ContactUncheckedUpdateInputObjectSchema = z.object({
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
	email:
		ContactEmailUncheckedUpdateManyWithoutContactInputObjectSchema?.optional(),
	phone:
		ContactPhoneUncheckedUpdateManyWithoutContactInputObjectSchema?.optional(),
	photo: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	socialMedia:
		SocialMediaUncheckedUpdateManyWithoutContactInputObjectSchema?.optional(),
	interactions:
		InteractionsUncheckedUpdateManyWithoutContactInputObjectSchema?.optional(),
	onTwitterList: z
		.union([z.boolean(), BoolFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	associatedUserId: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	profileForUser:
		UserUncheckedUpdateOneWithoutProfileInputObjectSchema?.optional(),
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
