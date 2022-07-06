import { Prisma, PrismaClient } from '@prisma/client'
// import type {ContactCreateInput} from '@prisma/client'
import { twitterUrlBase, linkedInUrlBase } from './seed/socialMediaSetup'
import { generateFakeContact } from './seed/fakedata'

const prisma = new PrismaClient()

const fakeContacts = 21

const associatedId = '62b8d027d989e0e820ebfa52'
type SocialMediaIds = {
	id: string
}
type FakeContactGenProps = {
	associatedId: string
	socialMediaIds: SocialMediaIds
}

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

	for (let i = 0; i < fakeContacts; i++) {
		console.info(`Generating fake contact ${i + 1} of ${fakeContacts}`)

		const data: Prisma.ContactUncheckedCreateInput = generateFakeContact({
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
