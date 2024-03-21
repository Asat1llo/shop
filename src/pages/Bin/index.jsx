import classes from './bin.module.css'
import { Card } from './../index.jsx'
import { decrement,increment} from '../../store/count.js';
import { useEffect, useState } from 'react';


export default function Bin() {

  const [cdata,setCdata] = useState([])
  
  const dec = ()=> dispatch(decrement())
  const inc = ()=> dispatch(increment())
  
  useEffect(()=>{
    setCdata(JSON.parse(localStorage.getItem('data')))
  },[])


  return (
      <div className={classes.bin}>
      <div className="container">
      <div className={classes.binWrraper}>
            <label  className={classes.binParagref}>Bin</label>
            <div className={classes.binContainerItems}>
            <div className={classes.binContainer}>
              {
                cdata?.map(item=> <Card item={item} key={item.id} inc={inc} dec={dec}/>)
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
