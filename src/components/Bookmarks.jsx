import React from 'react'
import "./Bookmark.css"
import Element from "./Element"

const Bookmarks = (props) => {

    // let bookmarks = JSON.parse(localStorage.getItem("bookmark"))
    let bookmarks = props.bookmarks
    // let bookmarks = [1,3,4,5]
    // console.log(typeof(bookmarks))

    return (
        <div className='bookmarksBox'>
            {bookmarks.map(item => (
                <Element name={item.name} siteName={item.site} />
            ))}
        </div>

    )
}

export default Bookmarks
