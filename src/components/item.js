import React from 'react'
import Link from 'gatsby-link'
import Svg from './svg';


const Item = (props) => {

    return (
        <div className="col-sm">
            <div className="cursor-container cur-alias">
                <div className="label">
                    <div className="label-img">
                        <Svg/>
                        <div className="label-img-text">      
                        <h1>{props.obj.label}</h1>
                        </div>                            
                    </div>
                </div>
                <div className="code">
                    <h5><span className="syntax">cursor </span> : <span className="type">{props.obj.syntax}</span>;</h5>
                </div>
            </div>
        </div>
    )
}

export default Item

