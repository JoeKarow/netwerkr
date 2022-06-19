import * as z from "zod"
import * as imports from "../../lib/zod-prisma"
import { CompleteContact, RelatedContactModel, CompleteSocialMediaService, RelatedSocialMediaServiceModel } from "./index"

export const SocialMediaModel = z.object({
  id: z.string(),
  contactId: z.string(),
  userId: z.string(),
  displayName: z.string(),
  username: z.string(),
  protected: z.boolean(),
  profileImg: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  socialMediaServiceId: z.string(),
})

export interface CompleteSocialMedia extends z.infer<typeof SocialMediaModel> {
  contact: CompleteContact
  service: CompleteSocialMediaService
}

/**
 * RelatedSocialMediaModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSocialMediaModel: z.ZodSchema<CompleteSocialMedia> = z.lazy(() => SocialMediaModel.extend({
  contact: RelatedContactModel,
  service: RelatedSocialMediaServiceModel,
}))
