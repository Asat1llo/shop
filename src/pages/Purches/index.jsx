import classes from './purches.module.css'
import React, { useState } from "react"
import { Dropdown } from 'primereact/dropdown'
import {location} from './../../assets/assets'



export default function Purches() {

  const [selectedCity, setSelectedCity] = useState(null);
  const cards = [
      { name: 'HUMO', code: 'hu' },
      { name: 'VISA', code: 'vi' },
  ];

  return (
    <div className={classes.purches}>
        <div className="container">
            <label className={classes.purchesTitle}>Оформление заказа</label>
            <div className={classes.purchesWrraper}>
              <div className={classes.purchesAddres}>
               <label className={classes.purchesAddresTitle}>Доставка курьером 
               <span className={classes.purchesAddresTitelPrice}>499 ₸</span></label>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.427841430616!2d69.21114148885495!3d41.234237500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6183ea313917%3A0xdc59607ad734d20c!2sPDP%20University!5e0!3m2!1sru!2s!4v1714300759618!5m2!1sru!2s" 
               className={classes.purchesAddresMap} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               <label className={classes.purchesAddresLocation}>
                <img src={location} alt="error" />
                Адрес доставки
               </label>
               <input type="text" className={classes.purchesAddresInput} placeholder='Город ' />
               <input type="text" className={classes.purchesAddresInput} placeholder='Улица / Район'/>
               <div className={classes.purchesAddresContainer}>
                <input type="text" className={classes.purchesAddresOtherInput} placeholder='Дом'/>
                <input type="text" className={classes.purchesAddresOtherInput} placeholder='Подъезд'/>
                <input type="text" className={classes.purchesAddresOtherInput} placeholder='Квартира'/>
               </div>
              </div>
              <div className={classes.purchesAbout}>
                <div className={classes.purchesDescription}>
                  <label className={classes.purchesDescriptionTitel}>Ваш заказ</label>
                  <div className={classes.purchesDescriptionContainer}>
                  <span className={classes.purchesNumbersofPurches}>1x</span>
                  <span className={classes.purchesDescriptionText}>Наушники Apple BYZ S852I</span>
                  <span className={classes.purchesDescriptionCost}>₸ 2 927</span>
                  </div>
                </div>
                <div className={classes.purchesPayment}>
                  <label className={classes.purchesPaymentTitle}>Способ оплаты</label>
                  <div className="card flex justify-content-center">
                   <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cards} optionLabel="name" 
                   placeholder="HUMO" className="w-full md:w-14rem" />
                 </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
