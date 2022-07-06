import { faker } from '@faker-js/faker'

import { Prisma } from '@prisma/client'
import { EmailLabel, PhoneLabel, InteractionSource } from '@prisma/client'

// SocialMediaCreateWithoutContactInput

const fakeInteractionCount = 15

const fakeContact = () => {
	return {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		photo: faker.image.avatar(),
		onTwitterList: false,
	}
}
const fakeEmail = (max: number) => {
	const result = []
	for (let i = 0; i < faker.mersenne.rand(1, max); i++) {
		result.push({
			email: faker.internet.email(),
			label: faker.helpers.arrayElement([
				'Home',
				'Work',
				'Other',
			]) as EmailLabel,
		})
	}
	return result
}

const fakePhone = (max: number) => {
	const result = []
	for (let i = 0; i < faker.mersenne.rand(1, max); i++) {
		result.push({
			number: faker.phone.number('###-###-####'),
			label: faker.helpers.arrayElement([
				'Home',
				'Work',
				'Mobile',
				'Other',
			]) as PhoneLabel,
		})
	}
	return result
}
const fakeSocial = (
	first: string,
	last: string,
	ids: string[]
): Prisma.SocialMediaCreateWithoutContactInput => {
	const serviceId = faker.helpers.arrayElement(ids)
	return {
		userId: faker.random.numeric(7),
		displayName: `${first} ${last}`,
		username: faker.internet.userName(first, last),
		service: {
			connect: { id: serviceId },
		},
		protected: false,
		profileImg: faker.internet.avatar(),
	}
}
const fakeInteraction = (max: number) => {
	const result = []
	for (let i = 0; i < faker.mersenne.rand(1, max); i++) {
		result.push({
			source: faker.helpers.arrayElement([
				'Twitter',
				'LinkedIn',
				'PhoneCall',
				'SMS',
				'Email',
				'DM',
				'InPerson',
			]) as InteractionSource,
			time: faker.date.past(),
			content: faker.lorem.sentences(),
		})
	}

	return result
}
type FakeContactProps = {
	associatedId: string
	socialMediaIds: string[]
}

export const generateFakeContact = ({
	associatedId,
	socialMediaIds,
}: FakeContactProps): Prisma.ContactUncheckedCreateInput => {
	const contact = fakeContact()
	const email = fakeEmail(3)
	const phone = fakePhone(3)
	const interaction = fakeInteraction(15)

	return {
		...contact,
		socialMedia: {
			create: fakeSocial(contact.firstName, contact.lastName, socialMediaIds),
		},
		associatedUserId: associatedId,
		email: {
			create: email,
		},
		phone: {
			create: phone,
		},
		interactions: {
			create: interaction,
		},
	}
	// console.log( result[ i ] )
}
