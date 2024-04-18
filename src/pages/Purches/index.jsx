import classes from './purches.module.css'


export default function Purches() {
  return (
    <div className={classes.purchesWrraper}>
        <div className="container">
            <div className={classes.purchesContainer}>
             <label className={classes.purchesTitel}>Оформление заказа</label>
             <div className={classes.purchesGrid}>
                <div className={classes.purchesItems}>1</div>
                <div className={classes.purchesItems}>2</div>
                <div className={classes.purchesItems}>3</div>
             </div>
            </div>
        </div>
    </div>
  )
}
