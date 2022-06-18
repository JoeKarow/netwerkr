import { MainLayout } from '@joekarow/netwerkr-ui/layout'
import { HeroImageRight, FeaturesGrid } from '@joekarow/netwerkr-ui/section'
import { AuthSessionStatus } from '@joekarow/netwerkr-ui/components'
import * as heroBackground from '../public/img/chris-j-davis-7ezFz2Hxd40-unsplash.jpg'
import { features } from '../data/featureGrid'

export default function Main ( props ) {
  const { title, description, featureDetails } = features
  return (
    <>
      <AuthSessionStatus />
      <HeroImageRight image={ heroBackground } />
      <FeaturesGrid
        title={ title }
        description={ description }
        data={ featureDetails } />
    </>
  );
}

Main.getLayout = function getLayout ( page ) {
  return (
    <MainLayout>
      { page }
    </MainLayout>
  )
}
