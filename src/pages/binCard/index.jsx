import classes from './binCard.module.css'
import { apple3, delet, minus,plus } from './../../assets/assets.jsx'
import {  useReducer } from 'react'
import { reduser } from './../../Context/Usercontext.js'



export default function binCard() {

  const defaultValue = 2.927

  const [counter,dispatch]= useReducer(reduser,defaultValue)

  

  return (
    <div className={classes.cardWrraper}>
        <div className={classes.cardContainerDelete}>
            <img src={delet} alt="delete" />
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
           <img src={minus} alt='minus' className={classes.cardPlus} onClick={()=>dispatch({type:'DEC'})}/>
           <span className={classes.cardCounterValue}>1</span>
           <img src={plus} alt='plus' className={classes.cardPlus} onClick={()=>dispatch({type:'INC'})}/>     
         </div> 
          <span className={classes.cardTotalPrice}>{counter}$</span>
        </div>   
    </div>  
  )
}
