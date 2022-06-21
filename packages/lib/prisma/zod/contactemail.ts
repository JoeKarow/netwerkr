import * as z from "zod"
import * as imports from "../zod-prisma"
import { EmailLabel } from "@prisma/client"
import { CompleteContact, RelatedContactModel } from "./index"

export const ContactEmailModel = z.object({
  id: z.string(),
  email: z.string(),
  label: z.nativeEnum(EmailLabel),
  createdAt: z.date(),
  updatedAt: z.date(),
  contactId: z.string(),
})

export interface CompleteContactEmail extends z.infer<typeof ContactEmailModel> {
  contact: CompleteContact
}

/**
 * RelatedContactEmailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedContactEmailModel: z.ZodSchema<CompleteContactEmail> = z.lazy(() => ContactEmailModel.extend({
  contact: RelatedContactModel,
}))
