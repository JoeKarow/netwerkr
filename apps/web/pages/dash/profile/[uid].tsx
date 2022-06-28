import React from "react";
// import { getContact } from '@joekarow/netwerkr-lib/db'
import { DashLayout } from '@joekarow/netwerkr-ui/layout'
import { ProfileGrid } from '@joekarow/netwerkr-ui/section'
import { JsonView } from '@joekarow/netwerkr-ui/devtools'
import { trpc } from "utils/trpc";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { NextPageWithLayout } from "pages/_app";
import {ssrInit} from "server/lib/ssr"


const Profile = ( props: InferGetServerSidePropsType<typeof getServerSideProps> ) => {
    const { id } = props
    const { data } = trpc.useQuery( [ 'profile.id', { id } ] )


    // console.log( data )
    return (
        <>
            <ProfileGrid />
            <JsonView data={ data } />
        </>
    )




}
Profile.getLayout = ( page: NextPageWithLayout ) => {
    return (
        <DashLayout>
            { page }
        </DashLayout>
    )
}

export const getServerSideProps = async ( context: GetServerSidePropsContext ) => {
    const ssr = await ssrInit(context)
    const id = context.params?.uid as string
    console.log( 'ssg id', id )
    await ssr.fetchQuery( 'profile.id', { id } )
    return {
        props: {
            trpcState: ssr.dehydrate(),
            id
        },
    }


    // const data = await getContact( params.uid )

    // if ( !data ) return { notFound: true }

    // return {
    //     props: { data }
    // }
}
export default Profile
//http://localhost:3000/dash/profile/62ba7634dc0748278a9ce027