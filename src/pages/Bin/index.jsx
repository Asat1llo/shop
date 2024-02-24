import classes from './bin.module.css'
import { Card } from './../index.jsx'


export default function Bin() {


      

  return (
      <div className={classes.bin}>
      <div className="container">
      <div className={classes.binWrraper}>
            <label  className={classes.binParagref}>Bin</label>
            <div className={classes.binContainerItems}>
            <div className={classes.binContainer}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
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
