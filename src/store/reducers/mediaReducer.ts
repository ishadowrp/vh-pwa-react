import {mediaListState} from "../../types/myTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAxiosAllMedia, getAxiosLast10Media, getAxiosMostPopularMedia} from "../actions/mediaList";


const initialState:mediaListState = {
    mediaData: [],
    loading: false,
    error: null
}

export const mediaListAllSlice = createSlice({
    name: 'mediaList',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getAxiosAllMedia.fulfilled.type]: (state = initialState, action: PayloadAction<[]>) => {
            state.loading = false;
            state.mediaData = action.payload;
            state.error = null;
        },
        [getAxiosAllMedia.pending.type]: (state = initialState, action: PayloadAction) => {
            state.loading = true;
            state.mediaData = [];
            state.error = null;
        },
        [getAxiosAllMedia.rejected.type]: (state = initialState, action: PayloadAction<string>) => {
            state.loading = false;
            state.mediaData = [];
            state.error = action.payload;
        },
    }
})

export const mediaListLast10Slice = createSlice({
    name: 'mediaList',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getAxiosLast10Media.fulfilled.type]: (state = initialState, action: PayloadAction<[]>) => {
            state.loading = false;
            state.mediaData = action.payload;
            state.error = null;
        },
        [getAxiosLast10Media.pending.type]: (state = initialState, action: PayloadAction) => {
            state.loading = true;
            state.mediaData = [];
            state.error = null;
        },
        [getAxiosLast10Media.rejected.type]: (state = initialState, action: PayloadAction<string>) => {
            state.loading = false;
            state.mediaData = [];
            state.error = action.payload;
        },
    }
})

export const mediaListMostPopularSlice = createSlice({
    name: 'mediaList',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getAxiosMostPopularMedia.fulfilled.type]: (state = initialState, action: PayloadAction<[]>) => {
            state.loading = false;
            state.mediaData = action.payload;
            state.error = null;
        },
        [getAxiosMostPopularMedia.pending.type]: (state = initialState, action: PayloadAction) => {
            state.loading = true;
            state.mediaData = [];
            state.error = null;
        },
        [getAxiosMostPopularMedia.rejected.type]: (state = initialState, action: PayloadAction<string>) => {
            state.loading = false;
            state.mediaData = [];
            state.error = action.payload;
        },
    }
})