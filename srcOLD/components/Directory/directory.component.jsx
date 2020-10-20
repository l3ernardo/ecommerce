import React, {useState} from 'react';
import sectionData from '../../../src/data';
import './directory.styles.scss';

import MenuItem from '../MenuItem/menu-item-component'

const Directory = () => {


    const [section, setSection] = useState(sectionData)

    return (

        <div className="directory-menu">

            {section.map(item => {
                console.log("directory : ", item)
                return (
                    <MenuItem key={item.id} title={item.title} imageUrl={item.imageUrl} size={item.size}/>
                )
            })}
            
        </div>
    )
}

export default Directory;
