import React, { useState } from 'react';
import "./Customise.css"
import ControlPanel from './ControlPanel'

const Customise = (props) => {

    const [isVisible, setIsVisible] = useState(false);

    let handelCustomise = ()=>{
        if (isVisible){
            setIsVisible(false)
        }else{
            setIsVisible(true)
        }
    }

    return (
        <>
            <div className='customiseBtn' onClick={handelCustomise} ><i className="fa-solid fa-sliders customiseIcon"></i></div>
            {isVisible &&(
                <ControlPanel className="hidden" id = "controlPanel" background={props.background} updateBackground={props.updateBackground} addShortcut={props.addShortcut} updateBookmarks={props.updateBookmarks} bookmarks = {props.bookmarks} />

            )}
        </>
    )
}

export default Customise
