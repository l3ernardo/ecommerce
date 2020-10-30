import React, { useState } from 'react'

import SHOP_DATA from '../../shop-data.js'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage =()=> {

    const [ collections ] = useState(SHOP_DATA)

    return (
        <div className="shop-page">
            {
                collections.map(({id, ...collectionProps}) => {
                    return (
                        <CollectionPreview key={id} {...collectionProps}/>
                    )
                })
            }
        </div>
    )
}

export default ShopPage;
 