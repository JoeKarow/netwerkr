import { DashLayout } from '~/layout'
import { ContactTable } from '~/components'
import { contactTable } from '~/mockdata'
import type { NextPageWithLayout } from 'next'

const Dash: NextPageWithLayout = () => {
	return <ContactTable data={contactTable} />
}

Dash.getLayout = page => {
	return <DashLayout>{page}</DashLayout>
}

export default Dash
