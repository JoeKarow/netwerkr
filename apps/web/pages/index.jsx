import { Layout } from '@joekarow/ui/layout/web'

export default function Main () {
  return (
    <>

      <h1>Web</h1>
    </>
  );
}

Main.getLayout = function getLayout ( page ) {
  return (
    <Layout>
      { page }
    </Layout>
  )
}