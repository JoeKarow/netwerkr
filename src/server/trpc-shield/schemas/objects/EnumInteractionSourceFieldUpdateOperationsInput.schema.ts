import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'

export const EnumInteractionSourceFieldUpdateOperationsInputObjectSchema =
	z.object({
		set: InteractionSourceSchema?.optional(),
	})
