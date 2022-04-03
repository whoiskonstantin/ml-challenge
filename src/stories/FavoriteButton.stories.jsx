import React from 'react'

import FavoriteButton from 'components/FavoriteButton'
import { ReactComponent as HeartEmpty } from 'assets/heart-empty.svg'
import { ReactComponent as HeartFilled } from 'assets/heart-filled.svg'

export default {
  title: 'FavoriteButton',
  component: FavoriteButton,
}

const Template = args => <FavoriteButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  on: false,
  count: 3,
  displayZeroCount: false,
  labels: ['Save', 'Saved'],
  icons: [<HeartEmpty />, <HeartFilled />],
}
