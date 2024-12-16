import React from 'react'
import "./AddShortcut.css"

const addShortcut = (props) => {

    let sendData = ()=>{
        let name = document.getElementById("name").value
        let url = document.getElementById("url").value
        // [{"site":"spotify.com","name":"Music"},{"site":"spotify.com","name":"Music"}]
        let data =[{
            "site":url,
            "name":name
        }]
        // console.log(data)
        props.addShortcut(data)
        props.handelClick()

    }

    return (
        <div className='shortcutBackBody'>
            <div className='shortcutBody'>
                <div className='shortcutHeading'>
                    Add Shortcut
                </div>
                <div className='shorcutLine'>
                    <div className='shorcutLabel'>Name</div>
                    <input id = "name" className='formInput' type='text' autoComplete="off"/>
                </div>
                <div className='shorcutLine'>
                    <div className='shorcutLabel'>Url</div>
                    <input id="url" className='formInput' type='url' autoComplete="off"/>
                </div>
                <div className='windowBtn'>
                    <div className='formBtn add' onClick={sendData}>Add</div>
                    <div className='formBtn discard' onClick={props.handelClick}>Discard</div>
                </div>
            </div>
        </div>
    )
}

export default addShortcut
