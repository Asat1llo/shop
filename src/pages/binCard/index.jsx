import classes from './binCard.module.css'
import { apple3, delet, minus,plus } from './../../assets/assets.jsx'
import { useSelector } from 'react-redux'



export default function binCard({ item,dec,inc}) {

  const {value,valueproduct} = useSelector((state)=>state.count)  

  return (
    <div className={classes.cardWrraper}>
        <div className={classes.cardContainerDelete}>
            <img src={delet} alt="delete" />
        </div>
        <div className={classes.cardContainerImage}>
            <img className={classes.binImage} src={item.image} alt="img" />
            <div className={classes.cardContainerName}>
                <span className={classes.cardName}>{item.title}</span>
                <span className={classes.cardPrice}>{item.price}$</span>
            </div>
        </div>
         <div className={classes.cardWrraperCounter}>
          <div className={classes.cardContainerCounter}>
           <img src={minus} alt='minus' className={classes.cardPlus} onClick={()=>dec()}/>
           <span className={classes.cardCounterValue}>{value}</span>
           <img src={plus} alt='plus' className={classes.cardPlus} onClick={()=>inc()}/>     
         </div> 
          <span className={classes.cardTotalPrice}>{valueproduct}$</span>
        </div>   
    </div>  
  )
}
