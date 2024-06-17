import classes from './cardInner.module.css'
import { Collapse } from 'antd';
import { Toast } from 'primereact/toast';
import {NavLink as Link, useParams} from 'react-router-dom'
import { useState,useRef} from 'react';

import { favorites,bin2,whatsap } from '../../assets/assets.jsx'
import { language as ldata } from '../../localization/localization.js'
import { useDispatch, useSelector } from 'react-redux';
import { addStoreg } from '../../store/localSlice.js';

export default function cardInner() {
 
  const toast = useRef(null);
  const [data,setData] = useState([])
  const {cardId} = useParams()
  const {lang} = useSelector(state=>state.lang)
  const dispatch = useDispatch()
  async function fetchInner(){
    const res = await fetch(`https://fakestoreapi.com/products/${cardId}`)
    setData(await res.json())
  }  
  fetchInner()
  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
  }
                
  return (
    <div className={classes.cardInner}>
      <Toast ref={toast} />
        <div className="container">
            <div className={classes.innerWrraper}>
                <div className={classes.innerContainer}>
                  <div className={classes.innerContainerFavorites}>
                    <img src={favorites} alt="favorites" className={classes.innerFavorites} />
                  </div>
                  <img src={data.image} alt="inner" className={classes.innerMainImage} />
                  <div className={classes.innerContainerImages}>
                    <img className={classes.innerImages} src={data.image} alt="images"/>
                    <img className={classes.innerImages} src={data.image} alt="images"/>
                    <img className={classes.innerImages} src={data.image} alt="images"/>
                    <img className={classes.innerImages} src={data.image} alt="images"/>
                    <img className={classes.innerImages} src={data.image} alt="images"/>
                  </div>
                  <div className={classes.innerContainerDesc}>
                    <span className={classes.innerName}>{data.title}</span>
                    <span className={classes.innerPrice}>{data.price}$</span>
                  </div>
                
                </div>
                <div className={classes.innerContainerdescriptions}>
                  <Collapse rootClassName={classes.innerCollapse} size='midlle' items={[ {
                           key: '1',
                           label:ldata[lang].inner.description,
                           children: <p className={classes.innerCollapseText}>{data.description}</p>,
                       },
                      ]}
                    />
                    <div className={classes.innerContainerBtn}>
                    <div className={classes.innerBtnWatssap}>
                          <img src={whatsap} alt="whatsapp" className={classes.innerBtnWatssapImg} />
                    </div>
                    <Link to={'/bin'}>
                      <button className={classes.innerBtnBuy}>{ldata[lang].inner.buy}!</button>
                    </Link>
                      <div className={classes.innerBtnBin} onClick={()=>{
                        dispatch(addStoreg(data))
                        showSuccess()
                        }}>
                        <img src={bin2} alt="bin" className={classes.innerBin} />
                        <p className={classes.innerBtnText}>{ldata[lang].inner.adbin}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
