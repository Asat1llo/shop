import classes from './header.module.css'
import { Menu as Drawer} from '../index.jsx'
import {logo, phone, samsung, apple,xiaomi, bin, favorites,locationn} from '../../assets/assets.jsx'
import { useState } from 'react';
import { NavLink as Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CascadeSelect } from 'primereact/cascadeselect';
import {language as ldata } from '../../localization/localization.js'



export function Header(){

 const {data} = useSelector(state=>state.local)
 const {lang} = useSelector(state=>state.lang)

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => { 
    setOpen(false);
  };

  const [selectedCity, setSelectedCity] = useState(null);

  const phones = [
    {
      name:'SAMSUNG',
      phone:[
        {name:'A51',},
        {name:'A22'},
        {name:'A50'}
      ]
    },
    {
      name:'APPLE',
      phone:[
        {name:'Iphone13',},
        {name:'Iphone14'},
        {name:'Iphone15'}
      ]
    },
    {
      name:'Xiaomi',
      phone:[
        {name:'X14',},
        {name:'X15'},
        {name:'X16'}
      ]
    },
  ]


    return(
      <header className={classes.headerStyle}>
        <div className='container'>
          <div className={classes.headerWrraper}>
            <div className={classes.headerContainer}>
            <Link to={'/'}>
            <div className={classes.headerContainerImg}>
              { 
              <img src={logo} alt="logo" className={classes.headerLogo} />
              }
            </div>
            </Link>
            <CascadeSelect value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={phones} 
                optionGroupLabel="name" optionGroupChildren={['phone']}
                className={classes.headerMenu} breakpoint="767px" placeholder="Select a City" style={{ minWidth: '14rem' }}  />
            </div>
            <div className={classes.headerItems}>
              <div className={classes.headerFavorites}>
              <img src={favorites} alt="favorites" />
              <span className={classes.headerBinCounter}>0</span>
              </div>
              <div className={classes.headerBurger} onClick={showDrawer}>
               <span className={classes.headerBurgerItems}></span>
               <span className={classes.headerBurgerItems}></span>
               <span className={classes.headerBurgerItems}></span>
              </div>
              <Link to={'/bin'}>
              <div className={classes.headerBin}>
               <img src={bin} alt="bin" />
                <span className={classes.headerBinCounter}>{data.length}</span>
              </div>
              </Link>
            </div>
           <Drawer onClose={onClose} open={open}/>
          </div>
        </div>
      </header> 
    )
}