import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {mediaListAllSlice, mediaListLast10Slice, mediaListMostPopularSlice} from "./reducers/mediaReducer";
import {userLoginSlice} from "./reducers/userReduser";

const rootReducer = combineReducers(
    {
        mediaList: mediaListAllSlice.reducer,
        mediaListLas10: mediaListLast10Slice.reducer,
        mediaListMP: mediaListMostPopularSlice.reducer,
        userLogin: userLoginSlice.reducer,
    }
)

export const setupStore = () => (configureStore({
    reducer: {rootReducer}
}))

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
