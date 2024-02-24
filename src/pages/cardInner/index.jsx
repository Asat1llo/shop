import classes from './cardInner.module.css'
import { Collapse } from 'antd';
import { NavLink as Link } from 'react-router-dom'
import { favorites, inner,bin2,whatsap,apple2,apple3 } from '../../assets/assets.jsx'


export default function cardInner() {
 
  
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div className={classes.cardInner}>
        <div className="container">
            <div className={classes.innerWrraper}>
                <div className={classes.innerContainer}>
                  <div className={classes.innerContainerFavorites}>
                    <img src={favorites} alt="favorites" className={classes.innerFavorites} />
                  </div>
                  <img src={apple2} alt="inner" className={classes.innerMainImage} />
                  <div className={classes.innerContainerImages}>
                    <img className={classes.innerImages} src={apple3} alt="images"  />
                    <img className={classes.innerImages} src={apple3} alt="images"  />
                    <img className={classes.innerImages} src={apple3} alt="images"  />
                    <img className={classes.innerImages} src={apple3} alt="images"  />
                    <img className={classes.innerImages} src={apple3} alt="images"  />
                  </div>
                  <div className={classes.innerContainerDesc}>
                    <span className={classes.innerName}>BOROFONE BH32</span>
                    <span className={classes.innerPrice}>2 927$</span>
                  </div>
                
                </div>
                <div className={classes.innerContainerdescriptions}>
                  <Collapse rootClassName={classes.innerCollapse} size='midlle' items={[ {
                           key: '1',
                           label: 'Description and characteristics',
                           children: <p className={classes.innerCollapseText}>{text}</p>,
                       },
                      ]}
                    />
                    <div className={classes.innerContainerBtn}>
                    <div className={classes.innerBtnWatssap}>
                          <img src={whatsap} alt="whatsapp" className={classes.innerBtnWatssapImg} />
                    </div>
                      <button className={classes.innerBtnBuy}>Buy!</button>
                      <Link to={'/bin'}>
                      <div className={classes.innerBtnBin} >
                        <img src={bin2} alt="bin" className={classes.innerBin} />
                        <p className={classes.innerBtnText}>Add to Bin</p>
                        </div>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
