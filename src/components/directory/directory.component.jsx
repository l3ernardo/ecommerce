import React, {useState} from 'react';
import sectionData from '../../data';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component'

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
