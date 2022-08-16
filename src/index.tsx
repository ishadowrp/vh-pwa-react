import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';
import Last10 from '../src/components/last10';
import MyFavorites from '../src/components/myFavorites';
import MyProfile from '../src/components/myProfile';
import MyMessages from '../src/components/myMessages';
import MyMedia from '../src/components/myMedia';
import MediaList from '../src/components/mediaList';
import MostPopularByViews from './components/mostPopularByViews';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Last10/>} />
                <Route path="mediaList" element={<MediaList />} />
                <Route path="mostPopularByViews" element={<MostPopularByViews />} />
                <Route path="myFavorites" element={<MyFavorites />}>
                    <Route path="profileMenu" element={<MyProfile />}>
                        <Route path="myMessages" element={<MyMessages />} />
                        <Route path="myMedia" element={<MyMedia />} />
                    </Route>
                </Route>
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </BrowserRouter>
);

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
