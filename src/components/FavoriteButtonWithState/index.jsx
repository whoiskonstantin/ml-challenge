import React, { useState } from 'react'

import FavoriteButton from 'components/FavoriteButton'

// Foreign key type can be changed to 'userId', 'postId', 'commentId', etc...
const fk = { userId: '1' }

// Initital state uses time as an fk for this example, but it can be any other value.
const buttonsInittialState = [
  { key: 1, isClicked: false, fk: null },
  { key: 2, isClicked: false, fk: null },
  { key: 3, isClicked: false, fk: null },
]

// Need this to prevent buttons states from clashing on different pages in the app.
const fkType = Object.keys(fk)[0]

// Retrieve buttons state and counter state from local storage.
const buttonsLocalStorageState = JSON.parse(localStorage.getItem(`buttonsState-for-${fkType}`))
const buttonsClicksLocalStorage = JSON.parse(localStorage.getItem(`buttonsClicks-for-${fkType}`))

const FavoriteButtonWithState = () => {
  const [count, setCount] = useState(buttonsClicksLocalStorage || 0) // If there is no clicks in local storage, set count to 0.
  const [buttonsState, setButtonsState] = useState(buttonsLocalStorageState || buttonsInittialState) // If there is no buttons state in local storage, set buttons state to inittial state.

  const onClick = buttonKey => {
    // Create new buttons state.
    const newButtonsState = buttonsState.reduce((newState, button) => {
      if (button.key === buttonKey) {
        return [...newState, { ...button, isClicked: !button.isClicked, fk: button.isClicked ? null : fk }]
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

    // Store new buttons state and counter state in local storage.
    localStorage.setItem(`buttonsState-for-${fkType}`, JSON.stringify(newButtonsState))
    localStorage.setItem(`buttonsClicks-for-${fkType}`, JSON.stringify(newCountState))

    // Update the react states.
    setCount(newCountState)
    setButtonsState(newButtonsState)

    // Note: "git checkout cf9dd9b8d3df37d33f8024bbc4fc2c4e8b7ebd6a" to see the other way to update the state (doesn't include 2nd extra credit).
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
