import { ReactComponent as HeartEmpty } from 'assets/heart-empty.svg'
import { ReactComponent as HeartFilled } from 'assets/heart-filled.svg'

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
}) => {
  return (
    <button
      aria-label='Favorite this'
      className='button'
      id='favorite-heart-button-with-counter'
      onClick={onClick}
      type='submit'
    >
      {on ? icons[0] : icons[1]}
      <span data-view-component='true' className='favorite-button-text'>
        {on ? labels[0] : labels[1]}
      </span>
      <span id='favorite-button-counter' aria-label={`${count} users favorited this resource`}>
        {getCount(count, displayZeroCount)}
      </span>
    </button>
  )
}

export default FavoriteButton
