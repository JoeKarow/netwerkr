import { MainLayout } from '~/layout'
import { HeroImageRight, FeaturesGrid } from '~/section'
import { AuthSessionStatus } from '~/components/devtools'
import * as heroBackground from '../../public/img/chris-j-davis-7ezFz2Hxd40-unsplash.jpg'
import { features } from '~/data/featureGrid'

import type { NextPageWithLayout } from 'next'

const Main: NextPageWithLayout = () => {
	const { title, description, featureDetails } = features
	return (
		<>
			<AuthSessionStatus />
			<HeroImageRight image={heroBackground} />
			<FeaturesGrid
				title={title}
				description={description}
				data={featureDetails}
			/>
		</>
	)
}

Main.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>
}

export default Main
