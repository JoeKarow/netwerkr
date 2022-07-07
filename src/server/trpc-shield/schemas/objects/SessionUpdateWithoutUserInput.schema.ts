import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

export const SessionUpdateWithoutUserInputObjectSchema = z.object({
	sessionToken: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	expires: z
		.union([z.date(), DateTimeFieldUpdateOperationsInputObjectSchema])
		?.optional(),
})
