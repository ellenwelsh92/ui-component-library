import type { Preview } from '@storybook/react-vite'
import { withThemeByClassName } from '@storybook/addon-themes'
import { themes } from 'storybook/theming'

import '../src/styles/index.css'
import './preview.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: { theme: themes.dark },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: 'dark',
      themes: {
        light: 'light',
        dark: 'dark',
      },
    }),
  ],
}

export default preview
