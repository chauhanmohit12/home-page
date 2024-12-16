import React from 'react'
import "./BookmarkList.css"
import { useState } from 'react'
import AddShortcut from './AddShortcut'
const BookmarkList = (props) => {

    const [isWindowVisible, setIsVisible] = useState(false);

    let handelClick = ()=>{
        if (isWindowVisible){
            setIsVisible(false)
        }else{
            setIsVisible(true)
        }
    }

    let bookmarkArray = props.bookmarks
    // console.log((bookmarkArray))
    return (
        <div className='BookmarkBox'>
            <div className='BookmarkHeading'>
                Bookmarks
            </div>
            <div className='BookamarkElements'>
                {bookmarkArray.map((item,index) => (
                    <>
                        <div className='bookmarkElement'>
                            <img className='bookmarkFavicon' src={`https://${item.site}/favicon.ico`} />
                            <div className='name'>{item.name}</div>
                            <div className='site'>{item.site}</div>
                            <i className="fa-solid fa-trash bookmarkIcon" onClick={()=>{
                                props.updateBookmarks(index)
                            }}></i>
                        </div>
                        {/* <hr className='divider' /> */}
                    </>
                ))}
            </div>
            <div className="addItem" onClick={handelClick}><i className="fa-solid fa-plus"></i></div>
            {isWindowVisible&&(
                <AddShortcut handelClick = {handelClick} addShortcut={props.addShortcut}/>
            )}
        </div>
    )
}

export default BookmarkList
