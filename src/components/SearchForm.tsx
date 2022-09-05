import React from 'react';
import {AppProps} from "../types/myTypes";
import searchButton from '../img/search-button.svg';

const SearchForm: (props: AppProps) => JSX.Element= (props: AppProps) => {
    return (
        <div className="search-form">
            <input id='search-media' type="search" className='quick-nav-item clear-button'/>
            <button className="clear-button search-btn"><img src={searchButton} alt='search' height='22px' width='22px'/></button>
        </div>
    );
}

export default SearchForm;