import {userLoginState, UserType} from "../../types/myTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAxiosAllMedia} from "../actions/mediaList";
import {userLogin} from "../actions/userLogin";


const initialState:userLoginState = {
    user: {
        id: 0,
        username: '',
        telephone: '',
        token: '',
        avatar: '',
    },
    error: null,
    loading: false,
}

export const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [userLogin.fulfilled.type]: (state = initialState, action: PayloadAction<UserType>) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        },
        [getAxiosAllMedia.pending.type]: (state = initialState, action: PayloadAction) => {
            state.loading = true;
            state.user = {
                id: 0,
                username: '',
                telephone: '',
                token: '',
                avatar: '',
            };
            state.error = null;
        },
        [getAxiosAllMedia.rejected.type]: (state = initialState, action: PayloadAction<string>) => {
            state.loading = false;
            state.user = {
                id: 0,
                username: '',
                telephone: '',
                token: '',
                avatar: '',
            };
            state.error = action.payload;
        },
    }
})

