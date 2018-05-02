import React from 'react'
import Link from 'gatsby-link'
import Item from './item'


const Row = () => {
    const cursors = [
        {label: "col resize", syntax: "col-resize"},
        {label: "col resize", syntax: "default"},
        {label: "col resize", syntax: "crosshair"},        
        {label: "col resize", syntax: "copy"},        
    ]

    const items = cursors.map(item => <Item key={item.syntax} obj={item}/>);

    return (
        <div className="row">
            {items}
        </div>
    )
}

export default Row
