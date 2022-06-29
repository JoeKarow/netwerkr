import { useDarkMode } from 'storybook-dark-mode'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { withThemes } from '@react-theming/storybook-addon';
import theme from '../style/theme'



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => { }}>
      <MantineProvider
        theme={{ colorScheme: useDarkMode() ? 'dark' : 'light' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>{props.children}</NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
export const decorators = [(Story) => <ThemeWrapper><Story /></ThemeWrapper>];