import { z } from 'zod'
import { ObjectId } from 'mongodb'

export const byID = z.object({
	id: z.string(),
})

export const ConnectByID = z.object({
	connect: byID,
})

interface ConnectProps {
	field: string
	zVal: Function
}

export const ConnectBy = (field: string, zVal: any) =>
	z.object({ connect: z.object({ [field]: zVal }) })

export const ConvertBSON = (oid: string) =>
	z.quotelessJson(JSON.stringify({ $oid: new ObjectId(oid) }))
