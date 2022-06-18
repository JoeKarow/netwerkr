import React from 'react';
import { Navbar, Group, Code, ScrollArea, createStyles } from '@mantine/core';
import {
    Notes,
    CalendarStats,
    Gauge,
    PresentationAnalytics,
    FileAnalytics,
    Adjustments,
    Lock,
} from 'tabler-icons-react';
import { LinksGroup } from '../components';

import { navbarNested as data } from '../mockdata'

//TODO: pass in authenticated user data (name, avatar)

const useStyles = createStyles( ( theme ) => ( {
    navbar: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[ 6 ] : theme.white,
        paddingBottom: 0,
    },

    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottom: `1px solid ${ theme.colorScheme === 'dark' ? theme.colors.dark[ 4 ] : theme.colors.gray[ 3 ]
            }`,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },

    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${ theme.colorScheme === 'dark' ? theme.colors.dark[ 4 ] : theme.colors.gray[ 3 ]
            }`,
    },
} ) );

export function NavbarNested () {
    const { classes } = useStyles();
    const links = data.links.map( ( item ) => <LinksGroup { ...item } key={ item.label } /> );

    return (
        <Navbar width={ { sm: 300 } } p="md" className={ classes.navbar }>
            <Navbar.Section grow className={ classes.links } component={ ScrollArea }>
                <div className={ classes.linksInner }>{ links }</div>
            </Navbar.Section>

            {/* <Navbar.Section className={ classes.footer }>
                <UserButton
                    image={ data.userInfo.image }
                    name={ data.userInfo.name }
                // email="anullpointer@yahoo.com"
                />
            </Navbar.Section> */}
        </Navbar>
    );
}