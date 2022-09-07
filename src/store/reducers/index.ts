import { combineReducers } from "@reduxjs/toolkit";
import { mediaListReducer } from "./mediaReducer";
import {userLoginReducer} from "./userReduser";


export default combineReducers({
    mediaList: mediaListReducer,
    user: userLoginReducer,
    }
);