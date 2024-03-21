import classes from './bin.module.css'
import { Card } from './../index.jsx'
import { decrement,increment} from '../../store/count.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchLocal } from '../../store/localSlice.js';


export default function Bin() {

  const [refresh,setRefresh] = useState(false)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchLocal())
  },[refresh])

  const {data} = useSelector(state=>state.local)
  
  const dec = ()=> dispatch(decrement())
  const inc = ()=> dispatch(increment())


  return (
      <div className={classes.bin}>
      <div className="container">
      <div className={classes.binWrraper}>
            <label  className={classes.binParagref}>Bin</label>
            <div className={classes.binContainerItems}>
            <div className={classes.binContainer}>
              {
                data?.map(item=> <Card item={item} key={item.id} inc={inc} dec={dec} setRefresh={setRefresh}/>)
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
