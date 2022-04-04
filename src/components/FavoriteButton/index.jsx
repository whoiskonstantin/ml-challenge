import { useState } from 'react'
import { ReactComponent as HeartEmpty } from 'assets/heart-empty.svg'
import { ReactComponent as HeartFilled } from 'assets/heart-filled.svg'
import { ReactComponent as CaretDown } from 'assets/caret-down-solid.svg'

const Dropdown = ({ on }) => {
  const [isOpen, setIsOpen] = useState(false)

  if (on) {
    return (
      <>
        <button className='button dropdown' onClick={() => setIsOpen(!isOpen)}>
          <CaretDown />
        </button>
        {isOpen && (
          <ul className='dropdown-menu'>
            <li>
              <a href='/'>Menu Item 1</a>
            </li>
            <li>
              <a href='/'>Menu Item 2</a>
            </li>
            <li>
              <a href='/'>Menu Item 3</a>
            </li>
          </ul>
        )}
      </>
    )
  }
}

const getCount = (count, displayZeroCount) => {
  if (count === 0 && displayZeroCount) {
    return ''
  } else {
    return count
  }
}

const FavoriteButton = ({
  on = false,
  count = 0,
  onClick = () => {
    console.log('button clicked')
  },
  displayZeroCount = true,
  icons = [<HeartFilled />, <HeartEmpty />],
  labels = ['Saved', 'Save'],
  dropdown = true, // toggle to see dropdown
}) => {
  return (
    <>
      <button aria-label='Favorite this' className='button' onClick={onClick} type='submit'>
        <div id='favorite-heart-button-with-counter'>
          {on ? icons[0] : icons[1]}
          <span data-view-component='true' className='favorite-button-text'>
            {on ? labels[0] : labels[1]}
          </span>
          <span id='favorite-button-counter' aria-label={`${count} users favorited this resource`}>
            {getCount(count, displayZeroCount)}
          </span>
        </div>
      </button>
      <Dropdown on={dropdown} />
    </>
  )
}

// TO DO: add prop types here to make sure that the props are valid.

export default FavoriteButton
