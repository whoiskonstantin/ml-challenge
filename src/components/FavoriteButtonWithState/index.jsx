import { useState } from 'react'
import FavoriteButton from 'components/FavoriteButton'

// Change this value to true to show the foreign key.
const showForeignKey = true

//  Since foeign key is passed FavoriteButtonWithState component might as well show it.
const ForeignKey = ({ fk }) => {
  if (!fk || !showForeignKey) return null
  const foreignKeyType = Object.keys(fk)[0]
  const foreignKeyValue = fk[foreignKeyType]

  return (
    <p>
      {foreignKeyType}: {foreignKeyValue}
    </p>
  )
}

const FavoriteButtonWithState = ({ count, id, handleSetCount, fk, defaultOn }) => {
  const [isOn, setIsOn] = useState(defaultOn || false)

  const onClick = () => {
    handleSetCount({ id, isOn })
    setIsOn(!isOn)
  }

  return (
    <>
      <ForeignKey fk={fk} />
      <FavoriteButton on={isOn} count={count} onClick={onClick} />
    </>
  )
}

export default FavoriteButtonWithState
