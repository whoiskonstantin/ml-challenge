import React, { useState } from 'react'

import FavoriteButton from 'components/FavoriteButton'

const buttonsInittialState = {
  1: false,
  2: false,
  3: false,
}

const FavoriteButtonWithState = () => {
  const [count, setCount] = useState(0)
  const [buttonsState, setButtonsState] = useState(buttonsInittialState)

  const onClick = button => {
    // Create new state.
    const newButtonsState = { ...buttonsState, [button]: !buttonsState[button] } // Update the right button.
    const newCountState = Object.values(newButtonsState).filter(isClicked => isClicked).length // Count the number of true values.
    // Update the state.
    setCount(newCountState)
    setButtonsState(newButtonsState)
  }

  const buttons = Object.keys(buttonsState) // ButtonsState keys: ['1', '2', '3']

  return (
    <>
      {buttons.map(button => (
        <FavoriteButton key={button} on={buttonsState[button]} count={count} onClick={() => onClick(button)} />
      ))}
    </>
  )
}

export default FavoriteButtonWithState
