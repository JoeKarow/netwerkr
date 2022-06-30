import { ObjectId } from 'mongodb'

export const mongoId = (str: string): boolean => {
	return ObjectId.isValid(str)
}
