import prisma from '../prisma'
import { convertDateTime } from './'


const getContact = async ( uid ) => {
    const data = await prisma.Contact.findUnique( {
        where: {
            id: uid
        },
        include: {
            email: true,
            phone: true,
            interactions: {
                include: {
                    conversationId: true,
                    sourceSocial: {
                        select: { name: true }
                    }


                }
            }
        }
    } )

    // console.log( typeof data.createdAt )
    return convertDateTime( data, [ 'createdAt', 'updatedAt', 'time' ] )
}

export { getContact }