import React from 'react'
import "./ControlPanel.css"
import Data from "../../public/json/images.json"
import BookmarkList from './BookmarkList'

const ControlPanel = (props) => {
    // console.log(Data.images)
    return (
        <div className='ControlBackground'>
            <div className='ControlBox'>
                <div className='controlHeading'>
                    Customize Background
                </div>
                <div className="curentWallpaper">
                    <img className='wallpaper' src={`images/${props.background}`} />
                    {/* <div className='wallpaperHeading'>Your Current Wallpaper</div> */}
                </div>
                <div className='backgoundBox'>
                    <div className='controlHeading2'>Background</div>
                    <div className='imageBox'>
                        {Data.images.map((image, index) => (
                            <img className="backgoundImage" key={index} src={`images/${image}`} alt={image} onClick={()=>props.updateBackground(image)} />
                        ))}
                    </div>
                </div>
                <BookmarkList bookmarks={props.bookmarks} updateBookmarks={props.updateBookmarks} addShortcut={props.addShortcut} />
            </div>
        </div>
    )
}

export default ControlPanel
