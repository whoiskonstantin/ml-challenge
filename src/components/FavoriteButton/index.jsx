import { ReactComponent as HeartEmpty } from './heart.svg'
import { ReactComponent as HeartFilled } from './heart-filled.svg'

const FavoriteButton = () => {
  return (
    <button aria-label='Favorite this' type='submit' id='favorite-heart-button-with-counter' className='button'>
      <HeartEmpty fill='red' />
      <HeartFilled />
      <span data-view-component='true' class='d-inline'>
        Favorite
      </span>
      <span id='favorite-button-counter' aria-label='0 users favorited this resource'>
        0
      </span>
    </button>
  )
}

export default FavoriteButton
