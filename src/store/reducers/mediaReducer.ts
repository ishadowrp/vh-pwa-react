import {AllMediaListActionType, mediaListState} from "../../types/myTypes";
import {AllMediaListActions} from "../../types/constants";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState:mediaListState = {
    mediaData: [],
    loading: false,
    error: null
}

export const mediaListReducer = (state = initialState, action:AllMediaListActionType):mediaListState => {
    switch (action.type) {
        case AllMediaListActions.GET_ALL_MEDIA :
            return {loading: true, error: null, mediaData: []}
        case AllMediaListActions.GET_ALL_MEDIA_SUCCESS:
            return {loading: false, error: null, mediaData: action.payload}
        case AllMediaListActions.GET_ALL_MEDIA_ERROR :
            return {loading: false, error: action.payload, mediaData: []}
        default:
            return state
    }
}

export const mediaListSlice = createSlice({
    name: 'mediaList',
    initialState: initialState,
    reducers: {
        getAllMedia(state = initialState, action: PayloadAction) {
            state.loading = true;
        },
        getAllMediaSuccess(state = initialState, action: PayloadAction<[]>) {
            state.loading = false;
            state.mediaData = action.payload;
        },
        getAllMediaError(state = initialState, action:PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})