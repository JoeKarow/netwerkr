import React from 'react'
import { useSession } from 'next-auth/react'
import { DashLayout } from '~/layout'
import { ProfileGrid } from '~/section'
import { JsonView } from '~/components/devtools'
// import { getProfile } from "@/db/getProfile";
import type { NextPageWithLayout } from 'next'

const Profile: NextPageWithLayout = props => {
	const { data } = props
	// const { data: session } = useSession()
	// console.log( data )
	return (
		<>
			<ProfileGrid />
			<JsonView data={props} />
		</>
	)
}
Profile.getLayout = page => {
	return <DashLayout>{page}</DashLayout>
}

// export const getServerSideProps = async () => {
//     const session = await unstable_getServerSession()
//     console.log( session )
//     return { props: { session } }
// }
export default Profile
