const { faker } = require( '@faker-js/faker' )

const fakeInteractionCount = 15


const fakeContact = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        photo: faker.image.avatar(),
        onTwitterList: false
    }
}
const fakeEmail = ( max ) => {
    const result = []
    for ( let i = 0; i < faker.mersenne.rand( 1, max ); i++ ) {
        result.push( {
            email: faker.internet.email(),
            label: faker.helpers.arrayElement( [ 'Home', 'Work', 'Other' ] )
        } )
    }
    return result
}

const fakePhone = ( max ) => {
    const result = []
    for ( let i = 0; i < faker.mersenne.rand( 1, max ); i++ ) {
        result.push( {
            number: faker.phone.number( '###-###-####' ),
            label: faker.helpers.arrayElement( [ 'Home', 'Work', 'Mobile', 'Other' ] )
        } )
    }
    return result
}
const fakeSocial = ( first, last, ids ) => {
    return {
        userId: faker.random.numeric( 7 ),
        displayName: `${ first } ${ last }`,
        username: faker.internet.userName( first, last ),
        socialMediaServiceId: faker.helpers.arrayElement( ids ).id,
        protected: false,
        profileImg: faker.internet.avatar()
    }
}
const fakeInteraction = ( max ) => {
    const result = []
    for ( let i = 0; i < faker.mersenne.rand( 1, max ); i++ ) {
        result.push( {
            source: faker.helpers.arrayElement( [ 'Twitter', 'LinkedIn', 'PhoneCall', 'SMS', 'Email', 'DM', 'InPerson' ] ),
            time: faker.date.past(),
            content: faker.lorem.sentences()
        } )
    }

    return result
}


const generateFakeContact = ( associatedUserId, socialMediaIds ) => {
    const contact = fakeContact()
    const email = fakeEmail( 3 )
    const phone = fakePhone( 3 )
    const interaction = fakeInteraction( 15 )

    return ( {
        ...contact,
        socialMedia: {
            create: fakeSocial( contact.firstName, contact.lastName, socialMediaIds )
        },
        associatedUserId,
        email: {
            create: email
        },
        phone: {
            create: phone
        },
        interactions: {
            create: interaction
        }
    } )
    // console.log( result[ i ] )
}


module.exports = generateFakeContact