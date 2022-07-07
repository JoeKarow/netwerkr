import { z } from 'zod'
import { SocialMediaScalarWhereInputObjectSchema } from './SocialMediaScalarWhereInput.schema'
import { SocialMediaUpdateManyMutationInputObjectSchema } from './SocialMediaUpdateManyMutationInput.schema'
import { SocialMediaUncheckedUpdateManyWithoutSocialMediaInputObjectSchema } from './SocialMediaUncheckedUpdateManyWithoutSocialMediaInput.schema'

export const SocialMediaUpdateManyWithWhereWithoutServiceInputObjectSchema =
	z.object({
		where: SocialMediaScalarWhereInputObjectSchema,
		data: z.union([
			SocialMediaUpdateManyMutationInputObjectSchema,
			SocialMediaUncheckedUpdateManyWithoutSocialMediaInputObjectSchema,
		]),
	})
