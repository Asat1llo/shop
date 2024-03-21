import classes from './content.module.css'
import {Card} from '../index.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../../store/count.js';


export function Content() {

  const {data} = useSelector((state)=>state.count)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchData())
  },[])


  return (
    <div className={classes.contentStyle}>
      <div className="container">
        <div className={classes.contentWrraper}>
          {
            data?.map(item=><Card item={item} key={item.id}/>)
          }
        </div>
      </div>
    </div>
  )
}
