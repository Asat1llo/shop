import classes from './binCard.module.css'
import { delet, minus,plus } from './../../assets/assets.jsx'
import { useSelector,useDispatch} from 'react-redux'
import { refresh } from '../../store/localSlice.js'



export default function binCard({ item,dec,inc}) {

  const {value,valueproduct} = useSelector((state)=>state.count) 
  const {data} = useSelector((state)=>state.local) 
  const dispatch = useDispatch()
  
  const  remoStore = (Id)=>{
   const remove = data.filter(item=>item.id !== Id)
   localStorage.setItem('data',JSON.stringify(remove))
   dispatch(refresh(true))
  }


  console.log();

  return (
    <div className={classes.cardWrraper}>
        <div className={classes.cardContainerDelete} onClick={()=>{remoStore(item.id)}} >
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
