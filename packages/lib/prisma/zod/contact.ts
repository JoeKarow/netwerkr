import * as z from "zod"
import * as imports from "../zod-prisma"
import { CompleteContactEmail, RelatedContactEmailModel, CompleteContactPhone, RelatedContactPhoneModel, CompleteSocialMedia, RelatedSocialMediaModel, CompleteInteractions, RelatedInteractionsModel, CompleteUser, RelatedUserModel } from "./index"

export const ContactModel = z.object({
  id: z.string().refine(imports.mongoId),
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
  photo: z.string(),
  onTwitterList: z.boolean(),
  associatedUserId: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
})

export interface CompleteContact extends z.infer<typeof ContactModel> {
  email: CompleteContactEmail[]
  phone: CompleteContactPhone[]
  socialMedia: CompleteSocialMedia[]
  interactions: CompleteInteractions[]
  associatedUser: CompleteUser
  profileForUser?: CompleteUser | null
}

/**
 * RelatedContactModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedContactModel: z.ZodSchema<CompleteContact> = z.lazy(() => ContactModel.extend({
  email: RelatedContactEmailModel.array(),
  phone: RelatedContactPhoneModel.array(),
  socialMedia: RelatedSocialMediaModel.array(),
  interactions: RelatedInteractionsModel.array(),
  associatedUser: RelatedUserModel,
  profileForUser: RelatedUserModel.nullish(),
}))
