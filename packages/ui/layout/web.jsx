import React from 'react'
import { HeaderAction } from '../section/HeaderAction'
import useSWR from 'swr'

const fetcher = ( url ) => fetch( url ).then( ( res ) => res.json() )
export const Layout = ( { children, nav } ) => {
    const { data, error } = useSWR( '/api/navigation', fetcher )
    if ( error ) {
        console.log( error )
        return <>Failed to load links</>
    }
    if ( !data ) return <>Loading...</>

    return (
        <>
            <HeaderAction links={ data.links } />
            <main>
                { children }
            </main>
        </>
    )
}
