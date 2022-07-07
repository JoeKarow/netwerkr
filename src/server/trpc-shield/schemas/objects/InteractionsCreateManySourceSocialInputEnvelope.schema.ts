import { z } from 'zod'
import { InteractionsCreateManySourceSocialInputObjectSchema } from './InteractionsCreateManySourceSocialInput.schema'

export const InteractionsCreateManySourceSocialInputEnvelopeObjectSchema =
	z.object({
		data: z.array(InteractionsCreateManySourceSocialInputObjectSchema),
	})
