import classes from './purches.module.css'
import {location} from './../../assets/assets'


export default function Purches() {
  return (
    <div className={classes.purchesWrraper}>
        <div className="container">
            <div className={classes.purchesContainer}>
             <label className={classes.purchesTitel}>Оформление заказа</label>
             <div className={classes.purchesGrid}>
                <div className={classes.purchesItems}>
                  <label className={classes.purchesItemsTitle}>Доставка курьером</label>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.427657581204!2d69.21307267526218!3d41.23424150548179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6183ea313917%3A0xdc59607ad734d20c!2sPDP%20University!5e0!3m2!1sru!2s!4v1713684014859!5m2!1sru!2s"
                   className={classes.purchesItemsIframe} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   <label className={classes.purchesItemsAdrresTitle}>
                    <img src={location} alt="error" />
                    Адрес доставки
                   </label>
                   <div className={classes.purchesItemsAdrres}>
                   <input type="text" className={classes.purchesAdrresInput} placeholder='Город ' />
                   <input type="text" className={classes.purchesAdrresInput} placeholder='Улица / Район' />
                   <div className={classes.purchesStreets}>
                    <input type="text" className={classes.purchesHome} placeholder='Дом' />
                    <input type="text" className={classes.purchesHome} placeholder='Подъезд' />
                    <input type="text" className={classes.purchesHome} placeholder='Квартира' />
                   </div>
                   </div>
                </div>
                <div className={classes.purchesItems}>2</div>
                <div className={classes.purchesItems}>3</div>
             </div>
            </div>
        </div>
    </div>
  )
}
