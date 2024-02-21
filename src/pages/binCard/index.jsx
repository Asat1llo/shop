import classes from './binCard.module.css'

import { apple3 } from './../../assets/assets.jsx'


export default function binCard() {
  return (
    <div className={classes.cardWrraper}>
        <div className={classes.cardContainerDelete}>
            <img src='' alt="delete" />
        </div>
        <div className={classes.cardContainerImage}>
            <img className={classes.binImage} src={apple3} alt="img" />
            <div className={classes.cardContainerName}>
                <span className={classes.cardName}>Apple BYZ S8521</span>
                <span className={classes.cardPrice}>2 927$</span>
            </div>
        </div>
         <div className={classes.cardWrraperCounter}>
          <div className={classes.cardContainerCounter}>
           <span className={classes.cardPlus}>+</span>
           <span className={classes.cardCounterValue}>0</span>
           <span className={classes.cardPlus}>-</span>     
         </div> 
          <span className={classes.cardTotalPrice}>2 927$</span>
        </div>   
    </div>  
  )
}
