import * as z from "zod"
import * as imports from "../../lib/zod-prisma"
import { InteractionSource } from "@prisma/client"
import { CompleteContact, RelatedContactModel, CompleteSocialMediaService, RelatedSocialMediaServiceModel, CompleteConversation, RelatedConversationModel } from "./index"

export const InteractionsModel = z.object({
  id: z.string(),
  contactId: z.string(),
  source: z.nativeEnum(InteractionSource),
  time: z.date(),
  content: z.string(),
  extPostId: z.string().nullish(),
  socialMediaServiceId: z.string(),
})

export interface CompleteInteractions extends z.infer<typeof InteractionsModel> {
  Contact: CompleteContact
  sourceSocial?: CompleteSocialMediaService | null
  conversationId: CompleteConversation[]
}

/**
 * RelatedInteractionsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedInteractionsModel: z.ZodSchema<CompleteInteractions> = z.lazy(() => InteractionsModel.extend({
  Contact: RelatedContactModel,
  sourceSocial: RelatedSocialMediaServiceModel.nullish(),
  conversationId: RelatedConversationModel.array(),
}))
