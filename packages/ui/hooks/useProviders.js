import { useState, useEffect } from 'react'
import { getProviders } from 'next-auth/react'
import { Icon, BrandTwitter, Key } from 'tabler-icons-react'


/**
 * It's an async function that calls the getProviders() function, which returns a promise. 
 * 
 * If the promise resolves, the response is returned. If the promise rejects, the error is logged to
 * the console
 * @returns The response from the getProviders() function.
 */
async function fetchProviders () {
    try {
        const response = await getProviders()
        return response
    } catch ( err ) {
        console.error( err )
    }
}

/* It's an async function that calls the getProviders() function, which returns a promise. */
const providers = fetchProviders()

const providerFormatter = ( data ) => {
    const Icons = {
        twitter: BrandTwitter,
        auth0: Key
    }
    return Object.keys( data ).map( ( item ) => {
        const ServiceIcon = Icons[ item ]
        const name = data[ item ].name
        return (
            {
                name,
                icon: <ServiceIcon size={ 18 } />,
            }
        )
    } )
}




export function useProviders () {
    const [ list, setList ] = useState( [] )



    useEffect( () => {
        providers.then( data => {
            //@ts-ignore
            const dataFormatted = providerFormatter( data )

            setList( dataFormatted )
        } ).catch( err => console.error( err ) )
    }, [] )

    return list
}