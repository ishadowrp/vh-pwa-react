import {userActionType, userLoginState} from "../../types/myTypes";
import {UserLoginActions} from "../../types/constants";

const initialState:userLoginState = {
    id: 0,
    username: '',
    token: '',
    avatarUrl: '',
    error: null,
}

export const userLoginReducer = (state = initialState, action:userActionType) => {
    switch (action.type) {
        case UserLoginActions.SUBMIT_USER_LOGIN_DATA :
            return {userID: 0, username: '', token: action.payload, avatarUrl: '', error: null}
        case UserLoginActions.GET_USER_PROFILE:
            return {id: action.payload.id, username: action.payload.username, token: action.payload.token, avatarUrl: action.payload.avatarUrl, error: null}
        case UserLoginActions.LOGOUT_USER_LOGIN :
            return {error: action.payload}
        default:
            return state
    }

}