import { z } from 'zod'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'

export const EnumPhoneLabelFieldUpdateOperationsInputObjectSchema = z.object({
	set: PhoneLabelSchema?.optional(),
})
