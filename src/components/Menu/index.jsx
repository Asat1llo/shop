import classes from './menu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from 'antd';
import { favorites,language,servis,contact } from '../../assets/assets';
import { language as ldata } from '../../localization/localization';
import { changelang } from '../../store/launguage';


export function Menu({onClose,open}) {

  const {lang} = useSelector(state=>state.lang)
  const dispatch = useDispatch()

  const changelan = (til)=>{
      dispatch(changelang(til))
  }

  return (
    <Drawer title={ldata[lang].header.brand} onClose={onClose}   open={open}>
    <label className={classes.menuDrawerLabel}>Samsung</label>
    <option className={classes.menuLabelOptions}  value="1">opetion 1</option>
    <option className={classes.menuLabelOptions} value="1">opetion 2</option>
    <option className={classes.menuLabelOptions} value="1">opetion 3</option>
    <label  className={classes.menuDrawerLabel}>Apple</label>
    <option className={classes.menuLabelOptions} value="1">opetion 1</option>
    <option className={classes.menuLabelOptions} value="1">opetion 2</option>
    <option className={classes.menuLabelOptions} value="1">opetion 3</option>
    <label  className={classes.menuDrawerLabel}>Xiaomi</label>
    <option className={classes.menuLabelOptions} value="1">opetion 1</option>
    <option className={classes.menuLabelOptions} value="1">opetion 2</option>
    <option className={classes.menuLabelOptions} value="1">opetion 3</option>
   <div className={classes.menuFavorites}>
      <img src={favorites} alt="favorites" />
      <span className={classes.headerFavoritesCounter}>{ldata[lang].footer.favorites}</span>
   </div>
   <div className={classes.menuFavorites}>
    <img src={servis} alt="servis" />
    <span className={classes.menuFavoritesCounter}>{ldata[lang].footer.terms}</span>
   </div>
   <div className={classes.menuFavorites}>
    <img src={contact} alt="contact" />
    <span className={classes.menuFavoritesCounter}>{ldata[lang].footer.terms}</span>
   </div>
   <div className={classes.menuFavorites}>
    <img src={language} alt="launguage" />
    <span className={classes.menuLanguageContainer}>
    <span className={classes.menuLanguage} onClick={()=>changelan('en')}>en</span>
    <span className={classes.menuLanguage} onClick={()=>changelan('ru')}>ru</span>
    <span className={classes.menuLanguage} onClick={()=>changelan('uz')}>uz</span>
    </span>
   </div>
    </Drawer>
  )
}
