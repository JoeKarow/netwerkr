import React from "react";
// import { getContact } from '@joekarow/netwerkr-lib/db'
import { DashLayout } from '@joekarow/netwerkr-ui/layout'
import { ProfileGrid } from '@joekarow/netwerkr-ui/section'
import { JsonView } from '@joekarow/netwerkr-ui/devtools'
import { createSSGHelpers } from '@trpc/react/ssg';
import superjson from 'superjson'
import { appRouter } from "server/routers/_app";
import { trpc } from "utils/trpc";


const Profile = ( props ) => {
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
Profile.getLayout = ( page ) => {
    return (
        <DashLayout>
            { page }
        </DashLayout>
    )
}

export const getServerSideProps = async ( context ) => {
    const ssg = await createSSGHelpers( {
        router: appRouter,
        ctx: {},
        transformer: superjson,
    } );
    const id = context.params?.uid
    console.log( 'ssg id', id )
    await ssg.fetchQuery( 'profile.id', { id } )
    return {
        props: {
            trpcState: ssg.dehydrate(),
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