import { Story, Meta } from '@storybook/react'
import InputText, { InputtextProps } from '.'
import theme from 'styles/theme'

import props from './mock'

const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'dark', value: `${theme.colors.black}` }
    ]
  }
  // layout: 'fullscreen',
}

export default {
  component: InputText,
  title: 'Design System/atoms/InputText',
  args: props,
  parameters
} as Meta

export const Mobile: Story<InputtextProps> = (args) => (
  <div>
    <InputText {...args} />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Default: Story<InputtextProps> = (args) => (
  <div>
    <InputText {...args} />
  </div>
)
