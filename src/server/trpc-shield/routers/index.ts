import { createProtectedRouter, createRouter } from './helpers/createRouter'
import { accountsRouter } from './Account.router'
import { sessionsRouter } from './Session.router'
import { usersRouter } from './User.router'
import { contactsRouter } from './Contact.router'
import { socialMediaServicesRouter } from './SocialMediaService.router'

// import { createRouter } from 'server/router/context'

export const appRouter = createRouter()
	// .merge('account.', accountsRouter)

	// .merge('session.', sessionsRouter)

	.merge('user.', usersRouter)

// .merge('contact.', contactsRouter)

// .merge('socialmediaservice.', socialMediaServicesRouter)
