import React, { useState } from 'react';
import {
    createStyles,
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Divider,
    Burger,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import {
    Logout,
    Heart,
    Star,
    Message,
    Settings,
    PlayerPause,
    Trash,
    SwitchHorizontal,
    ChevronDown,
} from 'tabler-icons-react';
import {UserButton} from '../components'

const useStyles = createStyles( ( theme ) => ( {
    header: {
        paddingTop: theme.spacing.sm,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[ 6 ] : theme.colors.gray[ 0 ],
        borderBottom: `1px solid ${ theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[ 2 ]
            }`,
        marginBottom: 0,
    },

    mainSection: {
        paddingBottom: theme.spacing.sm,
    },

    userMenu: {
        [ theme.fn.smallerThan( 'xs' ) ]: {
            display: 'none',
        },
    },

    user: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[ 0 ] : theme.black,
        padding: `${ theme.spacing.xs }px ${ theme.spacing.sm }px`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[ 8 ] : theme.white,
        },
    },

    burger: {
        [ theme.fn.largerThan( 'xs' ) ]: {
            display: 'none',
        },
    },

    userActive: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[ 8 ] : theme.white,
    },
} ) );

interface HeaderProps {
    user: { name: string; image: string };
}

export function HeaderUser () {
    const { classes, theme, cx } = useStyles();
    // const [ opened, toggleOpened ] = useBooleanToggle( false );
    const [ userMenuOpened, setUserMenuOpened ] = useState( false );

    return (
        <div className={ classes.header }>
            <Container className={ classes.mainSection }>
                <Group position="apart">
                    <h1>netwerkr</h1>

                    <UserButton/>
                </Group>
            </Container>
        </div>
    );
}