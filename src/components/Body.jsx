import React, { useState,useEffect } from 'react';
import "./Body.css"
import Search from "./Search"
import Bookmarks from './Bookmarks'
import Customise from './Customise'

const Body = (props) => {

    const [background, setBackground] = useState("");
    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        const wallpaper = localStorage.getItem("wallpaper");
        if (wallpaper !== null) {
            setBackground(wallpaper);
        }else{
            setBackground("bg-bleach.jpg");
        }
      }, []);

      useEffect(() => {
        const bookmarksItems = JSON.parse(localStorage.getItem("bookmark"));
        // console.log(bookmarksItems)
        if (bookmarksItems != null) {
            // console.log(bookmarksItems)
            setBookmarks(bookmarksItems);

        }else{
            // console.log("hello")
            localStorage.setItem("bookmark",JSON.stringify([]))
            setBookmarks([]);
        }
      }, []);

      let updateBookmarks = (id)=>{
        let bookmarks = JSON.parse(localStorage.getItem("bookmark"))
        bookmarks.splice(id,1)
        setBookmarks(bookmarks)
        localStorage.setItem("bookmark",JSON.stringify(bookmarks))
    }

    let addShortcut=(element)=>{
        let bookmarks = JSON.parse(localStorage.getItem("bookmark"))
        bookmarks = bookmarks.concat(element)
        console.log(element,bookmarks)
        setBookmarks(bookmarks)
        localStorage.setItem("bookmark",JSON.stringify(bookmarks))
    }

    let updateBackground = (newValue) => {
        // console.log(newValue)
        setBackground(newValue);
        localStorage.setItem("wallpaper",newValue)
      };

    return (
        <div className='container' style={{backgroundImage: `url("images/${background}")`}}>
            <Customise background={background} updateBackground={updateBackground} updateBookmarks={updateBookmarks} addShortcut={addShortcut} bookmarks={bookmarks} />
            <Search />
            <Bookmarks bookmarks={bookmarks} />
        </div>

    )
}

export default Body
