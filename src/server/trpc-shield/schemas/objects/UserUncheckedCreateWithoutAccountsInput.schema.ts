import { z } from 'zod'
import { RoleSchema } from '../enums/Role.schema'
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'
import { ContactUncheckedCreateNestedManyWithoutAssociatedUserInputObjectSchema } from './ContactUncheckedCreateNestedManyWithoutAssociatedUserInput.schema'
import { ProfileListCreateEnvelopeInputObjectSchema } from './ProfileListCreateEnvelopeInput.schema'
import { ProfileCreateInputObjectSchema } from './ProfileCreateInput.schema'

export const UserUncheckedCreateWithoutAccountsInputObjectSchema = z.object({
	id: z.string()?.optional(),
	name: z.string()?.optional().nullable(),
	email: z.string()?.optional().nullable(),
	emailVerified: z.date()?.optional().nullable(),
	image: z.string()?.optional().nullable(),
	twitterList: z.string()?.optional().nullable(),
	role: RoleSchema?.optional(),
	disabled: z.boolean()?.optional().nullable(),
	sessions:
		SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema?.optional(),
	contacts:
		ContactUncheckedCreateNestedManyWithoutAssociatedUserInputObjectSchema?.optional(),
	profile: z
		.union([
			ProfileListCreateEnvelopeInputObjectSchema,
			ProfileCreateInputObjectSchema,
			z.array(ProfileCreateInputObjectSchema),
		])
		?.optional(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
