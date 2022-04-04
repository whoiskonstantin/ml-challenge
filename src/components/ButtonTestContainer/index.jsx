import { useState } from 'react'
import FavoriteButtonWithState from 'components/FavoriteButtonWithState'

// Foreign key type can be changed to 'userId', 'postId', 'commentId', etc...
const fk = { userId: '123' }

const initialState = [
  { id: 1, isOn: false, fk: null },
  { id: 2, isOn: false, fk: null },
  { id: 3, isOn: false, fk: null },
]

// Need this to prevent buttons states from clashing on different pages in the app.
const fkType = Object.keys(fk)[0]

// Retrieve buttons state and counter state from local storage.
const buttonsLocalStorageState = JSON.parse(localStorage.getItem(`buttonsState-for-${fkType}`))
const buttonsClicksLocalStorage = JSON.parse(localStorage.getItem(`buttonsClicks-for-${fkType}`))

const ButtonTestContainer = () => {
  const [buttonsState, setButtonsState] = useState(buttonsLocalStorageState || initialState)
  const [count, setCount] = useState(buttonsClicksLocalStorage || 0)

  const handleSetCount = ({ id, isOn }) => {
    const newCount = isOn ? count - 1 : count + 1
    const newButtonsState = buttonsState.map(button => {
      if (button.id === id) {
        button.isOn = !isOn
        button.fk = button.isOn ? fk : null
      }
      return button
    })

    // Save buttons state and counter state to local storage.
    localStorage.setItem(`buttonsState-for-${fkType}`, JSON.stringify(newButtonsState))
    localStorage.setItem(`buttonsClicks-for-${fkType}`, JSON.stringify(newCount))

    setCount(newCount)
    setButtonsState(newButtonsState)
  }

  return (
    <div className='button-test-container'>
      {buttonsState.map(button => (
        <FavoriteButtonWithState
          key={button.id}
          id={button.id}
          count={count}
          handleSetCount={handleSetCount}
          fk={button.fk}
          defaultOn={button.isOn}
        />
      ))}
    </div>
  )
}

export default ButtonTestContainer
