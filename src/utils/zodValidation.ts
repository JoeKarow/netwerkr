import { z } from 'zod'

const zDate = z.preprocess(arg => {
	if (typeof arg == 'string' || arg instanceof Date) return new Date(arg)
}, z.date())

export const zId = z.object({
	id: z.string(),
})

export const zEmail = z.object({
	email: z.string(),
	primary: z.boolean().optional(),
	label: z.enum(['Home', 'Work', 'Other']),
})

export const zPhone = z.object({
	number: z.string(),
	label: z.enum(['Home', 'Work', 'Mobile', 'Other']),
	primary: z.boolean().optional(),
})

export const zSocialMediaService = z.object({
	id: z.string(),
	name: z.string(),
	urlbase: z.string(),
})

export const zSocialMedia = z.object({
	service: z.string(),
	userId: z.string(),
	displayName: z.string(),
	username: z.string(),
	protected: z.boolean(),
	profileImg: z.string().optional(),
})

export const zConversation = z.object({
	twitterConvoId: z.string().optional(),
})

export const zInteraction = z.object({
	source: z.enum([
		'Twitter',
		'LinkedIn',
		'PhoneCall',
		'SMS',
		'Email',
		'DM',
		'InPerson',
	]),
	sourceSocial: z.string(),
	time: zDate,
	content: z.string(),
	extPostId: z.string().optional(),
	conversation: zConversation.optional(),
})

export const zUserProfile = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: zEmail,
	phone: zPhone,
	photo: z.string().optional(),
	socialMedia: zSocialMedia,
})

export const zContact = z.object({
	id: z.string(),
	firstName: z.string().optional(),
	lastName: z.string().optional(),
	email: zEmail,
	phone: zPhone,
	photo: z.string().optional(),
	socialMedia: zSocialMedia,
	interactions: zInteraction,
	onTwitterList: z.boolean(),
	associatedUserId: z.string().optional(),
})
