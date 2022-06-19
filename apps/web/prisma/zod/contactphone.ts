import * as z from "zod"
import * as imports from "../../lib/zod-prisma"
import { PhoneLabel } from "@prisma/client"
import { CompleteContact, RelatedContactModel } from "./index"

export const ContactPhoneModel = z.object({
  id: z.string(),
  number: z.string(),
  label: z.nativeEnum(PhoneLabel),
  contactId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteContactPhone extends z.infer<typeof ContactPhoneModel> {
  contact: CompleteContact
}

/**
 * RelatedContactPhoneModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedContactPhoneModel: z.ZodSchema<CompleteContactPhone> = z.lazy(() => ContactPhoneModel.extend({
  contact: RelatedContactModel,
}))
