import React from 'react'

import './menu-items.styles.scss'

const  MenuItem = ({imageUrl, size, title}) => {
    console.log("prop title : ", imageUrl)
    return (
        <div 
            style={{ 
                backgroundImage:`url(${imageUrl})`
            }}
            className={`${size} menu-item`}
        >
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtite">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;
