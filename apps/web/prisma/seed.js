const { PrismaClient } = require('@prisma/client')
const { twitterUrlBase, linkedInUrlBase } = require('./seed/socialMediaSetup')
const generateFakeContact = require('./seed/fakedata')

const prisma = new PrismaClient()

const fakeContacts = 21

const associatedUserId = '62b8d027d989e0e820ebfa52'

const main = async () => {
	if (!fakeContacts) throw new Error(`variable 'fakeContacts' must be set`)

	await prisma.SocialMediaService.upsert(twitterUrlBase)
	await prisma.SocialMediaService.upsert(linkedInUrlBase)

	const socialMediaIds = await prisma.SocialMediaService.findMany({
		select: {
			id: true,
		},
	})

	for (let i = 0; i < fakeContacts; i++) {
		console.info(`Generating fake contact ${i + 1} of ${fakeContacts}`)
		await prisma.Contact.create({
			data: generateFakeContact(associatedUserId, socialMediaIds),
		})
	}
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
