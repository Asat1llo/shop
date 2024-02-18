import classes from './content.module.css'
import {Card} from './../index.jsx'
import { NavLink as Link } from 'react-router-dom'


export function Content() {
  return (
    <div className={classes.contentStyle}>
      <div className="container">
        <div className={classes.contentWrraper}>
          <Link to={'/inner'}>
          <Card/>
          </Link>
          <Link to={'/inner'}>
          <Card/>
          </Link>
          <Link to={'/inner'}>
          <Card/>
          </Link>
          <Link to={'/inner'}>
          <Card/>
          </Link>
          <Link to={'/inner'}>
          <Card/>
          </Link>
          <Link to={'/inner'}>
          <Card/>
          </Link>
        </div>
      </div>
    </div>
  )
}
