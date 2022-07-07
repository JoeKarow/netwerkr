import { createProtectedRouter } from './helpers/createRouter'
import { accountsRouter } from './Account.router'
import { sessionsRouter } from './Session.router'
import { usersRouter } from './User.router'
import { contactsRouter } from './Contact.router'
import { contactEmailsRouter } from './ContactEmail.router'
import { contactPhonesRouter } from './ContactPhone.router'
import { socialMediasRouter } from './SocialMedia.router'
import { socialMediaServicesRouter } from './SocialMediaService.router'
import { interactionsRouter } from './Interactions.router'
import { conversationsRouter } from './Conversation.router'

export const appRouter = createProtectedRouter()
	.merge('account.', accountsRouter)

	.merge('session.', sessionsRouter)

	.merge('user.', usersRouter)

	.merge('contact.', contactsRouter)

	.merge('contactemail.', contactEmailsRouter)

	.merge('contactphone.', contactPhonesRouter)

	.merge('socialmedia.', socialMediasRouter)

	.merge('socialmediaservice.', socialMediaServicesRouter)

	.merge('interactions.', interactionsRouter)

	.merge('conversation.', conversationsRouter)
