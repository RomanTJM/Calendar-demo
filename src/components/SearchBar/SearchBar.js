import React, { useState } from "react";
import "./SaerchBar.css";
import IconSearch from "../../Icons/IconSearch.svg";

function SearchBar ({events, openFormHandler}) {

     const [searchValue, setSearchValue] = useState('')
     const searchEvents = events.filter(event => {
        return event.title.toLowerCase().includes(searchValue.toLowerCase())
     })

     const itemClickHeadler = (e) => {
        setSearchValue(e.target.textContent)
     }

    return (
        <div>
            <img src={IconSearch} alt='Icon-search' className='icon-search'/>
            <input
                type="text"
                placeholder="Событие, дата или участник" 
                className='input-search'
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
            />
            <ul className="autocomplete-search">
                
                {
                    searchValue ?
                    searchEvents
                    .map((event, index) => {
                        return (
                            <li
                            key={event.id} 
                            className="autocomplete-search-item"
                            onDoubleClick={() => openFormHandler('Редактировать', event)}
                            onDoubleClickCapture={itemClickHeadler}
                            >
                                {event.title} 
                                <p className="subtitle-item">{event.date}</p>
                            </li>
                        )
                    })
                    : null
                }
            </ul>
         </div>
    )
}

export default SearchBar;