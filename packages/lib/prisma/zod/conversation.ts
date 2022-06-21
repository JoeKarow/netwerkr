import * as z from "zod"
import * as imports from "../zod-prisma"
import { CompleteInteractions, RelatedInteractionsModel } from "./index"

export const ConversationModel = z.object({
  id: z.string(),
  twitterConvoId: z.string().nullish(),
  interactionsId: z.string().nullish(),
})

export interface CompleteConversation extends z.infer<typeof ConversationModel> {
  Interactions?: CompleteInteractions | null
}

/**
 * RelatedConversationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedConversationModel: z.ZodSchema<CompleteConversation> = z.lazy(() => ConversationModel.extend({
  Interactions: RelatedInteractionsModel.nullish(),
}))
