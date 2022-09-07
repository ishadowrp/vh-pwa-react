import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';
import Last10 from '../src/components/last10';
import AllMedia from '../src/components/allMedia';
import MyProfile from '../src/components/myProfile';
import MyMessages from '../src/components/myMessages';
import MyMedia from '../src/components/myMedia';
import MostPopularByViews from './components/mostPopularByViews';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import { setupStore } from './store/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Last10/>} />
                    <Route path="mostPopularByViews" element={<MostPopularByViews />} />
                    <Route path="all" element={<AllMedia />} />
                    <Route path="profileMenu" element={<MyProfile />}>
                        <Route path="myMessages" element={<MyMessages />} />
                        <Route path="myMedia" element={<MyMedia />} />
                    </Route>
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    </Provider>
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

serviceWorkerRegistration.register();
