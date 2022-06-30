import { DashLayout } from '@joekarow/netwerkr-ui/layout'
import { ContactTable } from '@joekarow/netwerkr-ui/components'
import { contactTable } from '@joekarow/netwerkr-ui/mockdata'

const Dash = () => {
	return <ContactTable data={contactTable} />
}

Dash.getLayout = page => {
	return <DashLayout>{page}</DashLayout>
}

export default Dash
