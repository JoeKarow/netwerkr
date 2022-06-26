import * as z from "zod"
import * as imports from "../zod-prisma"
import { PhoneLabel } from "@prisma/client"
import { CompleteContact, RelatedContactModel } from "./index"

export const ContactPhoneModel = z.object({
  id: z.string(),
  number: z.string(),
  label: z.nativeEnum(PhoneLabel),
  primary: z.boolean().nullish(),
  contactId: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
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
