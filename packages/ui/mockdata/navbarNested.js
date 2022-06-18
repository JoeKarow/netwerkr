import {
    Notes,
    CalendarStats,
    Gauge,
    PresentationAnalytics,
    FileAnalytics,
    Adjustments,
    Lock,
} from 'tabler-icons-react';


export const navbarNested =
{
    links: [
        { label: 'Dashboard', icon: Gauge, link: '/dash' },
        {
            label: 'Contacts',
            icon: Notes,
            initiallyOpened: true,
            links: [
                { label: 'Overview', link: '/dash/contacts' },
                { label: 'Add', link: '/' },
                // { label: 'Outlook', link: '/' },
                // { label: 'Real time', link: '/' },
            ],
        },
        {
            label: 'Group 2',
            icon: CalendarStats,
            links: [
                { label: 'Upcoming releases', link: '/' },
                { label: 'Previous releases', link: '/' },
                { label: 'Releases schedule', link: '/' },
            ],
        },
        { label: 'Analytics', icon: PresentationAnalytics },
        { label: 'Contracts', icon: FileAnalytics },
        { label: 'Settings', icon: Adjustments },
        {
            label: 'Security',
            icon: Lock,
            links: [
                { label: 'Enable 2FA', link: '/' },
                { label: 'Change password', link: '/' },
                { label: 'Recovery codes', link: '/' },
            ],
        },
    ],
    userInfo: {
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
        name: "Ann Nullpointer"
    }
}