import classes from './emptybin.module.css'
import { illustration } from '../../assets/assets'


export default function Empty() {
  return (
    <div className={classes.emptyWrraper}>
        <img src={illustration} alt="error" className={classes.emptyWrraperImg} />
    </div>
  )
}
