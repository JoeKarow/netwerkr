import links from '../../data/nav.json'

// TODO: set up API to return navigation links based on if user is logged in or not



const handler = async ( req, res ) => {
    try {
        if ( req.method === 'GET' ) {
            res.status( 200 ).json( links )
        }
    } catch ( err ) {
        res.status( 500 ).json( err )
    }
}

export default handler