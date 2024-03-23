import classes from './binCard.module.css'
import { delet, minus,plus } from './../../assets/assets.jsx'
import { useSelector,useDispatch} from 'react-redux'
import { remove } from '../../store/localSlice.js'
import { decrement, increment } from '../../store/count.js'



export default function binCard({item}) {

  const {value,valueproduct} = useSelector((state)=>state.count) 
  const dispatch = useDispatch()
  
  return (
    <div className={classes.cardWrraper}>
        <div className={classes.cardContainerDelete} onClick={()=>{
          dispatch(remove(item.id))
          }} >
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
           <img src={minus} alt='minus' className={classes.cardPlus} onClick={()=>dispatch(decrement())}/>
           <span className={classes.cardCounterValue}>{value}</span>
           <img src={plus} alt='plus' className={classes.cardPlus} onClick={()=>dispatch(increment())}/>     
         </div> 
          <span className={classes.cardTotalPrice}>{valueproduct}$</span>
        </div>   
    </div>  
  )
}
