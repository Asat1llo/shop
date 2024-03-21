import classes from './card.module.css'
import {favorites,cardimg,rating} from '../../assets/assets.jsx'
import { NavLink as Link } from 'react-router-dom'


export  function Card({item}) {
  return (
    <Link to={`/inner/${item.id}`}>
    <div className={classes.cardWrraper}>
        <div className={classes.cardContainerFavorites}>
            <img src={favorites} alt="fovorites" />
        </div>
        <div className={classes.cardContainerImg}>
            <img src={item.image} alt="product" className={classes.cardImg} />
        </div>
        <div className={classes.cardContainerDesc}>
         <div className={classes.cardContainerItems}>
            <span className={classes.cardName}>{item.title.length >= 18 ? item.title.slice(0,15) : item.title}</span>
            <span className={classes.cardPrice}>{item.price}$</span>
         </div>
         <div className={classes.cardContainerRating}>
            <img className={classes.cardRating} src={rating} alt="rating" />
            <span className={classes.cardRatingNumber}>{item.rating.rate}</span>
         </div>
        </div>
    </div>
    </Link>
  )
}
