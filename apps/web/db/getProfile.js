import prisma from '../prisma'
import { convertDateTime } from '.'


const getProfile = async ( uid ) => {
    const data = await prisma.user.findUnique( {
        where: {
            id: uid
        },
        include: {
            profileId: true,
        }
    } )
    console.log( data )

}

export { getProfile }