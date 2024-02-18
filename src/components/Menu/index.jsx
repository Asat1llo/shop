import classes from './menu.module.css'
import { Drawer } from 'antd';
import { favorites,language,servis,contact } from '../../assets/assets';

export function Menu({onClose,open}) {
  return (
    <Drawer title='Select phone brand' onClose={onClose}   open={open}>
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
      <span className={classes.headerFavoritesCounter}>favorites</span>
   </div>
   <div className={classes.menuFavorites}>
    <img src={servis} alt="servis" />
    <span className={classes.menuFavoritesCounter}>Terms of service</span>
   </div>
   <div className={classes.menuFavorites}>
    <img src={contact} alt="contact" />
    <span className={classes.menuFavoritesCounter}>Contacts</span>
   </div>
   <div className={classes.menuFavorites}>
    <img src={language} alt="launguage" />
    <span className={classes.menuLanguageContainer}>
    <span className={classes.menuLanguage}>en</span>
    <span className={classes.menuLanguage}>ru</span>
    <span className={classes.menuLanguage}>uz</span>
    </span>
   </div>
    </Drawer>
  )
}
