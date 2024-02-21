import classes from './bin.module.css'

import { Card } from './../index.jsx'

export default function Bin() {
  return (
      <div className={classes.bin}>
      <div className="container">
        <div className={classes.binWrraper}>
            <label  className={classes.binParagref}>Bin</label>
            <div className={classes.binContainer}>
                <Card/>
            </div>
        </div>
      </div>
      </div>
  )
}
