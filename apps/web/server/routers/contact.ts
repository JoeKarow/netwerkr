import { Context } from '../context';
import { createRouter, createProtectedRouter } from '../createRouter';
import { Contact } from '@prisma/client';
import { z } from 'zod';
import { ContactModel } from 'prisma/zod';
import prisma from '../../prisma'
import { convertDateTime } from 'utils/convertDateTime';
import { Prisma, PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient()

const query = Prisma.validator<Prisma.ContactInclude>()({
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
})




export const contactRouter = createProtectedRouter()
    .query('id', {
        input: z.object({
            id: z.string()
        }),
        async resolve({ input }) {
            const { id } = input
            console.log('id to search:', id)
            const data = await prisma.contact.findUnique({
                where: {
                    id: id,
                },
                include: { ...query }
            })

            if (!data) console.log(data)
            return convertDateTime(data, ['createdAt', 'updatedAt', 'time'])

        }
    })

