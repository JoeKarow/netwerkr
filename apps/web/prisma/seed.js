const { PrismaClient } = require( '@prisma/client' )
const prisma = new PrismaClient()

const main = async () => {

    const twitterUrlBase = await prisma.SocialMediaService.upsert( {
        where: { name: 'Twitter' },
        update: {
            urlbase: 'https://www.twitter.com/'
        },
        create: {
            name: 'Twitter',
            urlbase: 'https://www.twitter.com/'
        }
    } )

    const linkedinUrlBase = await prisma.SocialMediaService.upsert( {
        where: { name: 'LinkedIn' },
        update: {
            urlbase: 'https://www.linkedin.com/in/'
        },
        create: {
            name: 'LinkedIn',
            urlbase: 'https://www.linkedin.com/in/'
        }
    } )

}


main().catch( ( e ) => {
    console.error( e )
    process.exit( 1 )
} ).finally( async () => {
    await prisma.$disconnect()
} )