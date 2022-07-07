import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { UserUpdateOneRequiredWithoutSessionsInputObjectSchema } from './UserUpdateOneRequiredWithoutSessionsInput.schema'

export const SessionUpdateInputObjectSchema = z.object({
	sessionToken: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	expires: z
		.union([z.date(), DateTimeFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	user: UserUpdateOneRequiredWithoutSessionsInputObjectSchema?.optional(),
})
