import classes from './emptybin.module.css'
import { NavLink as Link } from 'react-router-dom'
import { illustration } from '../../assets/assets'
import {language as ldata} from '../../localization/localization'
import { useSelector } from 'react-redux'

export default function Empty() {

  const {lang} = useSelector(state=>state.lang)

  return (
    <div className={classes.emptyWrraper}>
        <div className={classes.emptyContainer}>
        <img src={illustration} alt="error" className={classes.emptyWrraperImg} />
        <Link to={'/'}>
        <button className={classes.emptyBtn}>{ldata[lang].bin.back}</button>
        </Link>
        </div>
    </div>
  )
}
