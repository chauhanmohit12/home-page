import React, { useRef } from 'react';
import "./Search.css"

const Search = () => {

    const inputRef = useRef(null);

    function isValidUrl(string) {
        try {
          new URL(string);
          return true;
        } catch (error) {
          return false;
        }
      }

    const handleReadInput = (event) => {
        if (event.key === "Enter"){
            let prompt=inputRef.current.value

            let url = "https://www.google.com/search?q="+prompt.replace(" ","+")
            window.location.href = url;
            // console.log("not url")

        }
      };

    return (
        <div className='searchBox'>
            <div className='box'>
            <i className="fa-solid fa-magnifying-glass Icon"></i>
                <input className='searchInput' type='text' placeholder='Search the web  ' id="SeachInput" ref={inputRef} onKeyDown={handleReadInput} autoComplete="off"/>
            </div>
        </div>
    )
}

export default Search
