import axios from "axios";
import {AppDispatch} from "../store";
import {mediaListSlice} from "../reducers/mediaReducer";


export const getAxiosAllMedia = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(mediaListSlice.actions.getAllMedia)
            const response = await axios.get('http://127.0.0.1:8000/api/v1/media/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token a3ce009643034a3dc227061545c95139a5891f6d',
                }
            });
            if (response.status === 200) {
                console.log(response.data)
                dispatch(mediaListSlice.actions.getAllMediaSuccess(response.data))
            } else {
                dispatch(mediaListSlice.actions.getAllMediaError('Не удалось получить данные на сервере.'));
            }
        } catch (e) {
            dispatch(mediaListSlice.actions.getAllMediaError('Не удалось соединиться с сервером.'));
        }
    }
}


