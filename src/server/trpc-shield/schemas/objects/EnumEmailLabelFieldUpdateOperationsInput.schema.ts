import { z } from 'zod'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'

export const EnumEmailLabelFieldUpdateOperationsInputObjectSchema = z.object({
	set: EmailLabelSchema?.optional(),
})
