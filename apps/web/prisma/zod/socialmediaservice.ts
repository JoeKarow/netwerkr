import * as z from 'zod'
import * as imports from '../zod-prisma'
import {
	CompleteInteractions,
	RelatedInteractionsModel,
	CompleteSocialMedia,
	RelatedSocialMediaModel,
} from './index'

export const SocialMediaServiceModel = z.object({
	id: z.string(),
	name: z.string(),
	urlbase: z.string(),
})

export interface CompleteSocialMediaService
	extends z.infer<typeof SocialMediaServiceModel> {
	Interactions: CompleteInteractions[]
	SocialMedia: CompleteSocialMedia[]
}

/**
 * RelatedSocialMediaServiceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSocialMediaServiceModel: z.ZodSchema<CompleteSocialMediaService> =
	z.lazy(() =>
		SocialMediaServiceModel.extend({
			Interactions: RelatedInteractionsModel.array(),
			SocialMedia: RelatedSocialMediaModel.array(),
		})
	)
