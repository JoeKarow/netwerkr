import { PrismaClient } from '@prisma/client'
import { twitterUrlBase, linkedInUrlBase } from './seed/socialMediaSetup'
// import { generateFakeContact } from './seed/fakedataComposite'
import { generateFakeContact } from './seed/fakedataUnified'
const prisma = new PrismaClient()

const fakeContacts = 20

const associatedId = '62b8d027d989e0e820ebfa52'

/**
 * It creates a new contact in the database
 */
const main = async () => {
	if (!fakeContacts) throw new Error(`variable 'fakeContacts' must be set`)

	await prisma.socialMediaService.upsert(twitterUrlBase)
	await prisma.socialMediaService.upsert(linkedInUrlBase)

	const getSocialMediaIds = await prisma.socialMediaService.findMany({
		select: {
			id: true,
		},
	})

	const socialMediaIds: string[] = getSocialMediaIds.map(item => item.id)

	/* Creating a new contact in the database */
	for (let i = 0; i < fakeContacts; i++) {
		console.info(`Generating fake contact ${i + 1} of ${fakeContacts}`)

		const data = generateFakeContact({
			associatedId,
			socialMediaIds,
		})

		await prisma.contact.create({
			data,
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
