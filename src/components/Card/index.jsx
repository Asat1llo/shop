import classes from './card.module.css'
import {favorites,cardimg,rating} from '../../assets/assets.jsx'


export  function Card() {
  return (
    <div className={classes.cardWrraper}>
        <div className={classes.cardContainerFavorites}>
            <img src={favorites} alt="fovorites" />
        </div>
        <div className={classes.cardContainerImg}>
            <img src={cardimg} alt="product" className={classes.cardImg} />
        </div>
        <div className={classes.cardContainerDesc}>
         <div className={classes.cardContainerItems}>
            <span className={classes.cardName}>Apple BYZ S8521</span>
            <span className={classes.cardPrice}>2927$</span>
         </div>
         <div className={classes.cardContainerRating}>
            <img className={classes.cardRating} src={rating} alt="rating" />
            <span className={classes.cardRatingNumber}>4.7</span>
         </div>
        </div>
    </div>
  )
}
