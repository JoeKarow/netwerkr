import { z } from 'zod'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { RoleSchema } from '../enums/Role.schema'
import { EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema'
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema'
import { AccountUncheckedUpdateManyWithoutUserInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserInput.schema'
import { ContactUncheckedUpdateManyWithoutAssociatedUserInputObjectSchema } from './ContactUncheckedUpdateManyWithoutAssociatedUserInput.schema'

export const UserUncheckedUpdateWithoutSessionsInputObjectSchema = z.object({
	name: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	email: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	emailVerified: z
		.union([
			z.date(),
			NullableDateTimeFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	image: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	twitterList: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	role: z
		.union([RoleSchema, EnumRoleFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	disabled: z
		.union([
			z.boolean(),
			NullableBoolFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	accounts: AccountUncheckedUpdateManyWithoutUserInputObjectSchema?.optional(),
	contacts:
		ContactUncheckedUpdateManyWithoutAssociatedUserInputObjectSchema?.optional(),
	profileId: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
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
