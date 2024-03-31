import classes from './footer.module.css'
import {logo,wk,instagram,telegram,whatsapp,language} from '../../assets/assets.jsx'
import { NavLink as Link } from 'react-router-dom'
import {language as ldata } from '../../localization/localization.js'
import { useDispatch, useSelector } from 'react-redux'
import { changelang } from '../../store/launguage.js'


export  function Footer(){


    const {lang} = useSelector(state=>state.lang)
    const dispatch = useDispatch()

    const givelang = (til)=>{
        dispatch(changelang(til))
    }

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
                            <p className={classes.footerLinksPages}>{ldata[lang].footer.favorites}</p>
                            <p className={classes.footerLinksPages}>{ldata[lang].footer.bin}</p>
                            <p className={classes.footerLinksPages}>{ldata[lang].footer.contact}</p>
                        </li>
                        <li className={classes.footerLinks}>
                            <p className={classes.footerLinksTextPages}>{ldata[lang].footer.terms}</p>
                            <div className={classes.footerContainerLanguage}>
                            <img src={language} alt="earth" className={classes.footerLanguageImg} />
                            <span className={classes.footerLanguages} onClick={()=>givelang('en')}>en</span>
                            <span className={classes.footerLanguages} onClick={()=>givelang('ru')}>ru</span>
                            <span className={classes.footerLanguages} onClick={()=>givelang('uz')}>uz</span>
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
