import classes from './header.module.css'
import { Menu } from 'antd';
import { Menu as Drawer} from './../index.jsx'
import {logo, phone, samsung, apple,xiaomi, bin, favorites} from './../../assets/assets.jsx'
import { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';




export function Header(){

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Select phone brand', 'sub1', <img src={phone} alt="phone" />, [
      getItem( 'Samsung', 'sub2', <img src={samsung} alt="samsung" />, [getItem('Option 1', '2'), getItem('Option 3', '3')]),
      getItem('Apple', 'sub3', <img src={apple} alt="apple" />, [getItem('Option 4', '4'), getItem('Option 5', '5')]),
      getItem('Xiaomi', 'sub4', <img src={xiaomi} alt="xiaomi" />, [getItem('Option 6', '6'), getItem('Option 7', '7')]),
    ]),
  ];



    return(
      <header className={classes.headerStyle}>
        <div className='container'>
          <div className={classes.headerWrraper}>
            <div className={classes.headerContainer}>
            <Link to={'/'}>
            <div className={classes.headerContainerImg}>
              <img src={logo} alt="logo" className={classes.headerLogo} />
            </div>
            </Link>
            <Menu rootClassName={classes.headerMenu} mode="inline" items={items}/>
            </div>
            <div className={classes.headerItems}>
              <div className={classes.headerBin}>
              <img src={favorites} alt="favorites" />
              <span className={classes.headerBinCounter}>0</span>
              </div>
              <div className={classes.headerBurger} onClick={showDrawer}>
               <span className={classes.headerBurgerItems}></span>
               <span className={classes.headerBurgerItems}></span>
               <span className={classes.headerBurgerItems}></span>
              </div>
              <div   className={classes.headerBin}>
               <img src={bin} alt="bin" />
                <span className={classes.headerBinCounter}>0</span>
              </div>
            </div>
           <Drawer onClose={onClose} open={open}/>
          </div>
        </div>
      </header> 
    )
}