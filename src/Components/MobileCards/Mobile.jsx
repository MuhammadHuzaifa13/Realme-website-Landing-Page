import React from 'react'
import styles from "./Mobile.module.css"




const Mobile = ({Name, desc, imgSrc, price}) => {

  return (
    
    <div className={styles.parent}>
        
        <div>
            <span>New</span>
            <h2>{Name}</h2>
            <h3>{desc}</h3>
            <br />
            <h4>{"Rs."+ price}</h4>
        </div>
      <div>
        <img src={imgSrc} alt="" />
      </div>
    </div>
  )
}

export default Mobile
