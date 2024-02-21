import classes from './footer.module.css'
import {logo,wk,instagram,telegram,whatsapp,language} from '../../assets/assets.jsx'
import { NavLink as Link } from 'react-router-dom'



export  function Footer(){
    return(
        <footer className={classes.footerStyle}>
            <div className="container">
                <div className={classes.footerWrraper}>
                    <Link to={'/'}>
                    <div className={classes.footerContainerLogo}>
                        <img src={logo} alt="logo" className={classes.footerLogo} />
                    </div>
                    </Link>
                    <ul className={classes.footerList}>
                        <li className={classes.footerLinks}>
                            <p className={classes.footerLinksPages}>Favorites</p>
                            <p className={classes.footerLinksPages}>Bin</p>
                            <p className={classes.footerLinksPages}>Contacts</p>
                        </li>
                        <li className={classes.footerLinks}>
                            <p className={classes.footerLinksTextPages}>Terms of service</p>
                            <div className={classes.footerContainerLanguage}>
                            <img src={language} alt="earth" className={classes.footerLanguageImg} />
                            <span className={classes.footerLanguages}>en</span>
                            <span className={classes.footerLanguages}>ru</span>
                            <span className={classes.footerLanguages}>uz</span>
                            </div>
                        </li>
                    </ul>
                    <div className={classes.footerContainerWebs}>
                        <img src={wk} alt="Wk" className={classes.footerWebPages} />
                        <img src={instagram} alt="Instagram" className={classes.footerWebPages} />
                        <img src={telegram} alt="Telegram" className={classes.footerWebPages} />
                        <img src={whatsapp} alt="Watsap" className={classes.footerWebPages} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
