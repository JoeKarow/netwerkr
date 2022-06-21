
const prisma = require( './index' )
const { twitterUrlBase, linkedInUrlBase } = require( './seed/socialMediaSetup' )
const generateFakeContact = require( './seed/fakedata' )

const fakeContacts = 21


const main = async () => {
    if ( !fakeContacts ) throw new Error( `variable 'fakeContacts' must be set` )

    await prisma.SocialMediaService.upsert( twitterUrlBase )
    await prisma.SocialMediaService.upsert( linkedInUrlBase )

    const socialMediaIds = await prisma.SocialMediaService.findMany( {
        select: {
            id: true
        }
    } )

    for ( let i = 0; i < fakeContacts; i++ ) {
        console.info( `Generating fake contact ${ i + 1 } of ${ fakeContacts }` )
        console.log( socialMediaIds )
        await prisma.Contact.create( {
            data: generateFakeContact( socialMediaIds )
        } )
    }




}


main().catch( ( e ) => {
    console.error( e )
    process.exit( 1 )
} ).finally( async () => {
    await prisma.$disconnect()
} )