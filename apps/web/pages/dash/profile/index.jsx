import React from "react";
import { useSession, unstable_getServerSession } from "next-auth/react";
import { DashLayout } from '@joekarow/netwerkr-ui/layout'
import { ProfileGrid } from '@joekarow/netwerkr-ui/section'
import { JsonView } from '@joekarow/netwerkr-ui/devtools'
// import { getProfile } from "@/db/getProfile";


const Profile = ( props ) => {
    const { data } = props
    // const { data: session } = useSession()
    // console.log( data )
    return (
        <>
            <ProfileGrid />
            <JsonView data={ props } />
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

// export const getServerSideProps = async () => {
//     const session = await unstable_getServerSession()
//     console.log( session )
//     return { props: { session } }
// }
export default Profile
