import React from "react";
import { getContact } from '@joekarow/netwerkr-lib/db'
import { DashLayout } from '@joekarow/netwerkr-ui/layout'
import { ProfileGrid } from '@joekarow/netwerkr-ui/section'
import { JsonView } from '@joekarow/netwerkr-ui/devtools'

const Profile = ( props ) => {
    const { data } = props
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

export const getServerSideProps = async ( { params } ) => {
    const data = await getContact( params.uid )

    if ( !data ) return { notFound: true }

    return {
        props: { data }
    }
}
export default Profile
