import { PrismaClient } from "@prisma/client";
import { getSession } from 'next-auth/react'
import * as z from 'zod'
import { ObjectId } from "mongodb";

// TODO: Check if this actually returns a profile.
const validator = z.string().refine( str => ObjectId.isValid( str ) )

const prisma = new PrismaClient()

const handler = async ( req, res ) => {
    const { uid } = req.query
    const session = await getSession( { req } )
    if ( !session ) res.status( 401 )

    try {

        if ( req.method === "GET" ) {
            const profile = await prisma.Contact.findUnique( {
                where: {
                    id: uid
                },
                select: {
                    firstName: true,
                    lastName: true,
                    email: true,
                    phone: true,
                    photo: true,
                    socialMedia: true,
                    interactions: true,

                }
            } )
            res.send( profile )
        }
    } catch ( err ) {
        res.status( 400 ).send( err )
    }


}

export default handler