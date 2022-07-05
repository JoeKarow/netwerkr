import { DashLayout } from 'layout'
import { ContactTable } from 'components'
import { contactTable } from 'mockdata'

const Dash = () => {
	return <ContactTable data={contactTable} />
}

Dash.getLayout = page => {
	return <DashLayout>{page}</DashLayout>
}

export default Dash
