import React from 'react'
import Link from 'gatsby-link'
import Item from './item'


const Row = () => {
    const cursors = [
        {class: "cur-alias", label: "alias", syntax: "alias"},
        {class: "cur-allscroll", label: "all scroll", syntax: "all-scroll"},     
        {class: "cur-auto", label: "auto", syntax: "auto"},     
        {class: "cur-cell", label: "cell", syntax: "cell"},     
        {class: "cur-contextmenu", label: "context menu", syntax: "context-menu"},     
        {class: "cur-colresize", label: "col resize", syntax: "col-resize"},   
        {class: "cur-rowresize", label: "row resize", syntax: "row-resize"},    
        {class: "cur-nresize", label: "n resize", syntax: "n-resize"},    
        {class: "cur-neresize", label: "ne resize", syntax: "ne-resize"},
        {class: "cur-eresize", label: "e resize", syntax: "e-resize"},
        {class: "cur-seresize", label: "se resize", syntax: "se-resize"},
        {class: "cur-sresize", label: "s resize", syntax: "s-resize"},
        {class: "cur-swresize", label: "sw resize", syntax: "sw-resize"},   
        {class: "cur-wresize", label: "w resize", syntax: "w-resize"},    
        {class: "cur-nwresize", label: "nw resize", syntax: "nw-resize"},    
        {class: "cur-nsresize", label: "ns resize", syntax: "ns-resize"},     
        {class: "cur-ewresize", label: "ew resize", syntax: "ew-resize"},       
        {class: "cur-neswresize", label: "nesw resize", syntax: "nesw-resize"},    
        {class: "cur-copy", label: "copy", syntax: "copy"},     
        {class: "cur-crosshair", label: "crosshair", syntax: "crosshair"},     
        {class: "cur-default", label: "default", syntax: "default"},     
        {class: "cur-grab", label: "grab", syntax: "grab"},     
        {class: "cur-grabbing", label: "grabbing", syntax: "grabbing"},     
        {class: "cur-help", label: "help", syntax: "help"},     
        {class: "cur-move", label: "move", syntax: "move"},    
        {class: "cur-nodrop", label: "nodrop", syntax: "no-drop"},    
        {class: "cur-none", label: "none", syntax: "none"},    
        {class: "cur-notallowed", label: "notallowed", syntax: "not-allowed"},    
        {class: "cur-pointer", label: "pointer", syntax: "pointer"},    
        {class: "cur-progress", label: "progress", syntax: "progress"},   
        {class: "cur-text", label: "text", syntax: "text"},   
        {class: "cur-url", label: "custom cursor", syntax: "auto"},   
        {class: "cur-wait", label: "wait", syntax: "wait"},   
        {class: "cur-zoomin", label: "zoom in", syntax: "zoom-in"},   
        {class: "cur-zoomout", label: "zoom out", syntax: "zoom-out"}  
    ]

    const items = cursors.map(item => <Item key={item.syntax} obj={item}/>);

    return (
        <div className="row">
            {items}
        </div>
    )
}

export default Row
