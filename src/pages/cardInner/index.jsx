import classes from './cardInner.module.css'
import { Collapse } from 'antd';
import { favorites,bin2,whatsap } from '../../assets/assets.jsx'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { refresh } from '../../store/localSlice.js';

export default function cardInner() {

  const {data} = useSelector(state=>state.local)
  const dispatch = useDispatch()
  const [cdata,setData] = useState([])
  const {cardId} = useParams()
  useEffect(()=>{
    fetchInner()
  },[])

  async function fetchInner(){
    const res = await  fetch(`https://fakestoreapi.com/products/${cardId}`)
    setData(await res.json())
  }  
  

  const addLocal=()=>{
    const olda = JSON.parse(localStorage.getItem('data'))
    olda.push(cdata)
    localStorage.setItem('data',JSON.stringify(olda))
  }

                
  return (
    <div className={classes.cardInner}>
        <div className="container">
            <div className={classes.innerWrraper}>
                <div className={classes.innerContainer}>
                  <div className={classes.innerContainerFavorites}>
                    <img src={favorites} alt="favorites" className={classes.innerFavorites} />
                  </div>
                  <img src={cdata.image} alt="inner" className={classes.innerMainImage} />
                  <div className={classes.innerContainerImages}>
                    <img className={classes.innerImages} src={cdata.image} alt="images"  />
                    <img className={classes.innerImages} src={cdata.image} alt="images"  />
                    <img className={classes.innerImages} src={cdata.image} alt="images"  />
                    <img className={classes.innerImages} src={cdata.image} alt="images"  />
                    <img className={classes.innerImages} src={cdata.image} alt="images"  />
                  </div>
                  <div className={classes.innerContainerDesc}>
                    <span className={classes.innerName}>{cdata.title}</span>
                    <span className={classes.innerPrice}>{cdata.price}$</span>
                  </div>
                
                </div>
                <div className={classes.innerContainerdescriptions}>
                  <Collapse rootClassName={classes.innerCollapse} size='midlle' items={[ {
                           key: '1',
                           label: 'Description and characteristics',
                           children: <p className={classes.innerCollapseText}>{cdata.description}</p>,
                       },
                      ]}
                    />
                    <div className={classes.innerContainerBtn}>
                    <div className={classes.innerBtnWatssap}>
                          <img src={whatsap} alt="whatsapp" className={classes.innerBtnWatssapImg} />
                    </div>
                      <button className={classes.innerBtnBuy}>Buy!</button>
                      <div className={classes.innerBtnBin} onClick={()=>{
                        addLocal()
                        dispatch(refresh(true))
                      }} >
                        <img src={bin2} alt="bin" className={classes.innerBin} />
                        <p className={classes.innerBtnText}>Add to Bin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
