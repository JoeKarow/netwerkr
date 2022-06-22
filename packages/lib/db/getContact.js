import prisma from '../prisma'
import { convertDateTime } from './'


const getContact = async ( uid ) => {
    const data = await prisma.Contact.findUnique( {
        where: {
            id: uid
        }
    } )

    console.log( data )
    return convertDateTime( data, [ 'createdAt', 'updatedAt' ] )
}

export { getContact }