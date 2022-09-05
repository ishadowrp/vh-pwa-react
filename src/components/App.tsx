import React from 'react';
import '../css/App.css';
import {
  Link,
  Outlet
} from "react-router-dom";
import {AppProps} from "../types/myTypes";
import SearchForm from './SearchForm';

const App: (props: AppProps) => JSX.Element= (props: AppProps) => {

    return (
        <div id='app' className="app-container">
            <nav id='quick-nav' className="scrollable-component">
                <SearchForm />
                <Link to="/mostPopularByViews" className="quick-nav-item clear-button"><span className='quick-nav-item-label'>Most Populars</span></Link>
                <Link to="/" className="quick-nav-item clear-button"><span className='quick-nav-item-label'>Last 10</span></Link>
                <Link to="/all" className="quick-nav-item clear-button"><span className='quick-nav-item-label'>All</span></Link>
                <Link to="/profileMenu" className="quick-nav-item clear-button"><span className='quick-nav-item-label'>My Profile</span></Link>
            </nav>
            <Outlet />
          <div id="app-background">
            <div id="app-background-image" className="background-image" />
          </div>
        </div>
    );
}

export default App;