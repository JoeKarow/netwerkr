import { shield, allow } from 'trpc-shield'

export const permissions = shield({
	query: {
		aggregateAccount: allow,
		aggregateContact: allow,
		aggregateContactEmail: allow,
		aggregateContactPhone: allow,
		aggregateConversation: allow,
		aggregateInteractions: allow,
		aggregateSession: allow,
		aggregateSocialMedia: allow,
		aggregateSocialMediaService: allow,
		aggregateUser: allow,
		findFirstAccount: allow,
		findFirstContact: allow,
		findFirstContactEmail: allow,
		findFirstContactPhone: allow,
		findFirstConversation: allow,
		findFirstInteractions: allow,
		findFirstSession: allow,
		findFirstSocialMedia: allow,
		findFirstSocialMediaService: allow,
		findFirstUser: allow,
		findManyAccount: allow,
		findManyContact: allow,
		findManyContactEmail: allow,
		findManyContactPhone: allow,
		findManyConversation: allow,
		findManyInteractions: allow,
		findManySession: allow,
		findManySocialMedia: allow,
		findManySocialMediaService: allow,
		findManyUser: allow,
		findUniqueAccount: allow,
		findUniqueContact: allow,
		findUniqueContactEmail: allow,
		findUniqueContactPhone: allow,
		findUniqueConversation: allow,
		findUniqueInteractions: allow,
		findUniqueSession: allow,
		findUniqueSocialMedia: allow,
		findUniqueSocialMediaService: allow,
		findUniqueUser: allow,
		groupByAccount: allow,
		groupByContact: allow,
		groupByContactEmail: allow,
		groupByContactPhone: allow,
		groupByConversation: allow,
		groupByInteractions: allow,
		groupBySession: allow,
		groupBySocialMedia: allow,
		groupBySocialMediaService: allow,
		groupByUser: allow,
	},
	mutation: {
		createOneAccount: allow,
		createOneContact: allow,
		createOneContactEmail: allow,
		createOneContactPhone: allow,
		createOneConversation: allow,
		createOneInteractions: allow,
		createOneSession: allow,
		createOneSocialMedia: allow,
		createOneSocialMediaService: allow,
		createOneUser: allow,
		deleteManyAccount: allow,
		deleteManyContact: allow,
		deleteManyContactEmail: allow,
		deleteManyContactPhone: allow,
		deleteManyConversation: allow,
		deleteManyInteractions: allow,
		deleteManySession: allow,
		deleteManySocialMedia: allow,
		deleteManySocialMediaService: allow,
		deleteManyUser: allow,
		deleteOneAccount: allow,
		deleteOneContact: allow,
		deleteOneContactEmail: allow,
		deleteOneContactPhone: allow,
		deleteOneConversation: allow,
		deleteOneInteractions: allow,
		deleteOneSession: allow,
		deleteOneSocialMedia: allow,
		deleteOneSocialMediaService: allow,
		deleteOneUser: allow,
		updateManyAccount: allow,
		updateManyContact: allow,
		updateManyContactEmail: allow,
		updateManyContactPhone: allow,
		updateManyConversation: allow,
		updateManyInteractions: allow,
		updateManySession: allow,
		updateManySocialMedia: allow,
		updateManySocialMediaService: allow,
		updateManyUser: allow,
		updateOneAccount: allow,
		updateOneContact: allow,
		updateOneContactEmail: allow,
		updateOneContactPhone: allow,
		updateOneConversation: allow,
		updateOneInteractions: allow,
		updateOneSession: allow,
		updateOneSocialMedia: allow,
		updateOneSocialMediaService: allow,
		updateOneUser: allow,
		upsertOneAccount: allow,
		upsertOneContact: allow,
		upsertOneContactEmail: allow,
		upsertOneContactPhone: allow,
		upsertOneConversation: allow,
		upsertOneInteractions: allow,
		upsertOneSession: allow,
		upsertOneSocialMedia: allow,
		upsertOneSocialMediaService: allow,
		upsertOneUser: allow,
	},
})
