import React, {useState} from 'react';
import {
    UnstyledButton,
    Group,
    Avatar,
    Text,
    createStyles,
    Menu,
    Divider
} from '@mantine/core';
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


//TODO: Change menu items


const useStyles = createStyles( ( theme ) => ( {
        userMenu: {
        // [ theme.fn.smallerThan( 'xs' ) ]: {
        //     display: 'none',
        // },
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
        userActive: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[ 8 ] : theme.white,
    },

} ) );


export interface UserButton {
    user: {
        image: string;
        name: string;
    }
}

export function UserButton ( { user }: UserButton ) {
    const { classes, cx, theme } = useStyles();
    const [ userMenuOpened, setUserMenuOpened ] = useState( false );

    return (
                    <Menu
                        size={ 260 }
                        placement="end"
                        transition="pop-top-right"
                        className={ classes.userMenu }
                        onClose={ () => setUserMenuOpened( false ) }
                        onOpen={ () => setUserMenuOpened( true ) }
                        control={
                            <UnstyledButton
                                className={ cx( classes.user, { [ classes.userActive ]: userMenuOpened } ) }
                            >
                                <Group spacing={ 7 }>
                                    <Avatar src={ user.image } alt={ user.name } radius="xl" size={ 20 } />
                                    <Text weight={ 500 } size="sm" sx={ { lineHeight: 1 } } mr={ 3 }>
                                        { user.name }
                                    </Text>
                                    <ChevronDown size={ 12 } />
                                </Group>
                            </UnstyledButton>
                        }
                    >
                        <Menu.Item icon={ <Heart size={ 14 } color={ theme.colors.red[ 6 ] } /> }>
                            Liked posts
                        </Menu.Item>
                        <Menu.Item icon={ <Star size={ 14 } color={ theme.colors.yellow[ 6 ] } /> }>
                            Saved posts
                        </Menu.Item>
                        <Menu.Item icon={ <Message size={ 14 } color={ theme.colors.blue[ 6 ] } /> }>
                            Your comments
                        </Menu.Item>

                        <Menu.Label>Settings</Menu.Label>
                        <Menu.Item icon={ <Settings size={ 14 } /> }>Account settings</Menu.Item>
                        <Menu.Item icon={ <SwitchHorizontal size={ 14 } /> }>Change account</Menu.Item>
                        <Menu.Item icon={ <Logout size={ 14 } /> }>Logout</Menu.Item>

                        <Divider />

                        <Menu.Label>Danger zone</Menu.Label>
                        <Menu.Item icon={ <PlayerPause size={ 14 } /> }>Pause subscription</Menu.Item>
                        <Menu.Item color="red" icon={ <Trash size={ 14 } /> }>
                            Delete account
                        </Menu.Item>
                    </Menu>
    );
}