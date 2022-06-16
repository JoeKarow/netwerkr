import React, { Suspense, ReactFragment, useState } from "react";
import { Button, Modal, Group } from "@mantine/core";
import { getProviders, signOut, useSession } from "next-auth/react";
import Link from 'next/link'
import { useEffect } from "react";
import { Icon, BrandTwitter, Key} from 'tabler-icons-react'

interface Icons {
    [index: string]: Icon
}


const icons: Icons = {
    Twitter: BrandTwitter,
    Auth0: Key
}




interface LoginService {
    signinUrl: string,
    ServiceIcon: Icon,
    name: string
}

const LoginProvider = () => {
    const { data: session, status } = useSession()
    const [ opened, setOpened ] = useState( false )
    const [ providers, setProviders ] = useState( null )
    useEffect( () => {
        ( async () => {
            const res: any = await getProviders();
            // @ts-ignore
            // setProviders( res );
            setProviders( Object.keys( res ).map( ( item: any ) => {
                const service: LoginService = res[item]
                service.ServiceIcon = icons[item] as Icon
                const url = service.signinUrl
                const ServiceIcon = service.ServiceIcon
                const name = item[0].toUpperCase() + item.substring(1)
                console.log(React.isValidElement(ServiceIcon), '->', ServiceIcon)
                return (
                    <Button
                        key={item }
                        component="a"
                        size="lg"
                        href={ url }
                        leftIcon={
                            <ServiceIcon size={ 18 } />
                        } >
                        { name }
                    </Button >
                )
            }
            ) );
        } )();
    }, [] );


    if ( status === 'authenticated' ) {
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
                    { providers }

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