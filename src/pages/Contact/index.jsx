import classes from './contact.module.css'
import { location,whatsapp,wk,instagram,telegram,number } from '../../assets/assets'


export default function Contact() {
  return (
    <div className={classes.contact}>
        <div className="container">
            <div className={classes.contactWrraper}>
                <div className={classes.contactContainer}>
                <div className={classes.contactContainerOffice}>
                    <label className={classes.contactOfficeTitle}>Our office</label>
                    <div className={classes.contactOfficeLocation}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.4276575811937!2d69.21307267507365!3d41.234241505482025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6183ea313917%3A0xdc59607ad734d20c!2sPDP%20University!5e0!3m2!1sen!2s!4v1711883359957!5m2!1sen!2s" className={classes.contactOfficeIframe} ></iframe>  
                   </div>
                    <div className={classes.contactOfficeAddres}>
                        <img src={location} alt="error" />
                        <span className={classes.contactOfficeTextaddred}>
                            <p className={classes.contactOfficeAddresStreet}>Sergeli distrcit,Yangi Sergeli street,12</p>
                            <p className={classes.contactOfficeAddresHome}>236 xona</p>
                        </span>
                    </div>
                </div>
                <div className={classes.contactMedia}>
                    <span className={classes.contactMediaItems}>
                    <a className={classes.contactMedialocation}>
                        <img src={whatsapp} alt="error" />
                    </a>
                    </span>
                    <span className={classes.contactMediaItems}>
                    <a className={classes.contactMedialocation}>
                        <img src={wk} alt="error" />
                    </a>
                    </span>
                    <span className={classes.contactMediaItems}>
                    <a className={classes.contactMedialocation}>
                        <img src={instagram} alt="error" />
                    </a>
                    </span>
                    <span className={classes.contactMediaItems}>
                    <a className={classes.contactMedialocation}>
                        <img src={telegram} alt="error" />
                    </a>
                    </span>
                </div>
                </div>
                <span className={classes.contactPhoneNumber}>
                    <img src={number} alt="error" className={classes.contactNumberImg} />
                    <span className={classes.contactNumber}>+998 93 552 16 79</span>
                </span>
            </div>
        </div>
    </div>
  )
}
