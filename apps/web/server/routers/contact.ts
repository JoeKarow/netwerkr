import { Context } from '../context';
import { createRouter } from '../createRouter';
import { Contact } from '@prisma/client';
import { z } from 'zod';
import { ContactModel } from 'prisma/zod';
import prisma from 'prisma/'
import { convertDateTime } from 'utils/convertDateTime';


export const contactRouter = createRouter()
    .query('id',{
        input: z.object({
            id: z.string()
        }),
        async resolve({input}) {
            const {id} = input
            const data = await prisma.contact.findUnique( {
                where: {
                    id
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
            return convertDateTime( data, [ 'createdAt', 'updatedAt', 'time' ])

        }
    })

