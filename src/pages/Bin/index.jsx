import classes from './bin.module.css'
import { Card, Empty } from './../index.jsx'
import { useSelector } from 'react-redux';
import { language as ldata } from '../../localization/localization.js'


export default function Bin() {

 
  const {data,status} = useSelector(state=>state.local)
  const {lang} = useSelector(state=>state.lang)
  

  if(data.length === 0 || status == 'loading' && 'error'){
    return <Empty/>
  } 
  else return (
      <div className={classes.bin}>
      <div className="container">
      <div className={classes.binWrraper}>
            <label  className={classes.binParagref}>{ldata[lang].footer.bin}</label>
            <div className={classes.binContainerItems}>
            <div className={classes.binContainer}>
              {
                data?.map(item=> <Card item={item} key={item.id}/>)
              }
            </div>
            <div className={classes.binContainerTotalPrice}>
          <div className={classes.binWrraperTotalPrice}>
            <div className={classes.binContainerTotalValue}>
              <span className={classes.binTotal}>{ldata[lang].bin.total}</span>
              <span className={classes.binTotalValue}>$ 2.927</span>
            </div>
            <button className={classes.binTotalBtn}>{ldata[lang].bin.next}</button>
          </div>
            </div>
            </div>
       </div>
      </div>
      </div>
  )
}
