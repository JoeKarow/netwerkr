import { z } from 'zod'
import { SessionWhereInputObjectSchema } from './SessionWhereInput.schema'

///@ts-ignore
export const SessionListRelationFilterObjectSchema = z.object({
	every: SessionWhereInputObjectSchema?.optional(),
	some: SessionWhereInputObjectSchema?.optional(),
	none: SessionWhereInputObjectSchema?.optional(),
})
