import classes from './bin.module.css'
import { Card, Empty } from './../index.jsx'
import { useSelector } from 'react-redux';


export default function Bin() {

 
  const {data,status} = useSelector(state=>state.local)
  

  if(data.length === 0 || status == 'loading' && 'error'){
    return <Empty/>
  } 
  else return (
      <div className={classes.bin}>
      <div className="container">
      <div className={classes.binWrraper}>
            <label  className={classes.binParagref}>Bin</label>
            <div className={classes.binContainerItems}>
            <div className={classes.binContainer}>
              {
                data?.map(item=> <Card item={item} key={item.id}/>)
              }
            </div>
            <div className={classes.binContainerTotalPrice}>
          <div className={classes.binWrraperTotalPrice}>
            <div className={classes.binContainerTotalValue}>
              <span className={classes.binTotal}>TOTAL</span>
              <span className={classes.binTotalValue}>$ 2.927</span>
            </div>
            <button className={classes.binTotalBtn}>Next</button>
          </div>
            </div>
            </div>
       </div>
      </div>
      </div>
  )
}
