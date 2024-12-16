import React from 'react'

import "./Element.css"
const Element = (props) => {
    let redirect = (site)=>{
        window.location.href = site;
    }

    return (
        <div className='elementBox'>
            <div className='elementBody' onClick={()=>{
                redirect("https://www."+props.siteName)
            }}>
                <img className='elementLogo' src={`https://${props.siteName}/favicon.ico`} />
                <div className='elementLabel'>{props.name}</div>
            </div>
        </div>
    )
}

export default Element
