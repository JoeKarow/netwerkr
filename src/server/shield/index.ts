import { shield, allow } from 'trpc-shield'

export const permissions = shield({
	query: {
		aggregateAccount: allow,
		aggregateContact: allow,
		aggregateSession: allow,
		aggregateSocialMediaService: allow,
		aggregateUser: allow,
		findFirstAccount: allow,
		findFirstContact: allow,
		findFirstSession: allow,
		findFirstSocialMediaService: allow,
		findFirstUser: allow,
		findManyAccount: allow,
		findManyContact: allow,
		findManySession: allow,
		findManySocialMediaService: allow,
		findManyUser: allow,
		findUniqueAccount: allow,
		findUniqueContact: allow,
		findUniqueSession: allow,
		findUniqueSocialMediaService: allow,
		findUniqueUser: allow,
		groupByAccount: allow,
		groupByContact: allow,
		groupBySession: allow,
		groupBySocialMediaService: allow,
		groupByUser: allow,
	},
	mutation: {
		createOneAccount: allow,
		createOneContact: allow,
		createOneSession: allow,
		createOneSocialMediaService: allow,
		createOneUser: allow,
		deleteManyAccount: allow,
		deleteManyContact: allow,
		deleteManySession: allow,
		deleteManySocialMediaService: allow,
		deleteManyUser: allow,
		deleteOneAccount: allow,
		deleteOneContact: allow,
		deleteOneSession: allow,
		deleteOneSocialMediaService: allow,
		deleteOneUser: allow,
		updateManyAccount: allow,
		updateManyContact: allow,
		updateManySession: allow,
		updateManySocialMediaService: allow,
		updateManyUser: allow,
		updateOneAccount: allow,
		updateOneContact: allow,
		updateOneSession: allow,
		updateOneSocialMediaService: allow,
		updateOneUser: allow,
		upsertOneAccount: allow,
		upsertOneContact: allow,
		upsertOneSession: allow,
		upsertOneSocialMediaService: allow,
		upsertOneUser: allow,
	},
})