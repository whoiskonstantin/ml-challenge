import React, { useState } from 'react'

import FavoriteButton from 'components/FavoriteButton'

const buttonsInittialState = [
  { key: 1, isClicked: false },
  { key: 2, isClicked: false },
  { key: 3, isClicked: false },
]

const FavoriteButtonWithState = () => {
  const [count, setCount] = useState(0)
  const [buttonsState, setButtonsState] = useState(buttonsInittialState)

  const onClick = buttonKey => {
    // Create new buttons state.
    const newButtonsState = buttonsState.reduce((newState, button) => {
      if (button.key === buttonKey) {
        return [...newState, { ...button, isClicked: !button.isClicked }]
      }
      return [...newState, button]
    }, [])

    // Create new count state based on new buttons state.
    const newCountState = newButtonsState.reduce((total, button) => {
      if (button.isClicked) {
        return total + 1
      }
      return total
    }, 0)

    // Update the states.
    setCount(newCountState)
    setButtonsState(newButtonsState)
  }

  return (
    <>
      {buttonsState.map(button => (
        <FavoriteButton key={button.key} on={button.isClicked} count={count} onClick={() => onClick(button.key)} />
      ))}
    </>
  )
}

export default FavoriteButtonWithState
