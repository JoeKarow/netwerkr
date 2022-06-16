import React, { useRef, useState, Suspense } from "react";
import { Button, Modal, Group } from "@mantine/core";
import { getProviders, signOut, signIn, useSession } from "next-auth/react";
import Link from 'next/link'
import { useEffect } from "react";
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

const providers = fetchProviders()

function ProviderButtons ( { list } ) {
    if ( list === null ) {
        return <p>Loading...</p>
    }
    const Icons = {
        twitter: BrandTwitter,
        auth0: Key
    }
    console.log( list )
    const buttons = Object.keys( list ).map( ( item ) => {
        const service = list[ item ]
        // const url = service.signinUrl
        const ServiceIcon = Icons[ item ]
        const name = item[ 0 ].toUpperCase() + item.substring( 1 )
        console.info( 'looping provider for', item )
        return (
            <Button
                key={ item }
                component="a"
                size="lg"
                onClick={ () => signIn( item ) }
                leftIcon={ <ServiceIcon size={ 18 } /> }
            >
                { name }
            </Button >
        )
    } )
    return buttons
}


const LoginProvider = () => {
    const { data: session, status } = useSession()
    const [ opened, setOpened ] = useState( false )
    const [ auth, setAuth ] = useState( status === 'authenticated' )
    const [ list, setList ] = useState( null )
    useEffect( () => {
        providers.then( data => {
            //@ts-ignore
            setList( data )
        } ).catch( err => console.error( err ) )
    }, [] )
    useEffect( () => ( setAuth( status === 'authenticated' ) )
        , [ session, status ] )



    if ( auth ) {
        return (
            <Button
                onClick={ () => signOut( { callbackUrl: '/' } ) }
                radius="xl"
                sx={ { height: 30 } }
            >
                Sign Out
            </Button>
        )
    }


    return (
        <>
            <Modal
                centered={ true }
                opened={ opened }
                onClose={ () => setOpened( false ) }
                title="Log in"
            >
                <Group
                    direction="column"
                    position="center"
                >
                    <ProviderButtons list={ list } />
                </Group>
            </Modal>
            <Button
                onClick={ () => setOpened( true ) }
                radius="xl"
                sx={ { height: 30 } }
            >
                Sign In
            </Button>
        </>
    )
}

export default LoginProvider