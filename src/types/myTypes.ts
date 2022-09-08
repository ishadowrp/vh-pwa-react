import {AllMediaListActions, UserLoginActions} from "./constants";

export interface AppProps {
    id?: string;
}

type StateType = {
    visibilityFilter?: string,
    mediaListData?: MyMediaListType,
    mediaData?: MyMediaType,
    user?: number,
    username?: string,
    token?: string,
    commentListData?: CommentListType,
    comment?: Comment,
}

type MyMediaType = {
    id?: number,
    title: string,
    description: string,
    media: string,
    author:	number,
    date_posted?: string,
    views_count?: number,
    current_rating?: string
}

type MyMediaListType = [MyMediaType]

type CommentType = {
    id?: number,
    media:	number,
    author:	number,
    date_posted?: string,
    current_rating:	string,
    content: string,
}

type CommentListType = [CommentType]

type MyMediaRatingType = {
    id?: number,
    media: number,
    author:	number,
    rating:	number,

}

type CommentRatingType = {
    id?: number,
    comment: number,
    author:	number,
    rating:	number,
}

interface GetAllMediaListAction {
    type: AllMediaListActions.GET_ALL_MEDIA;
}

interface GetAllMediaListSuccessAction {
    type: AllMediaListActions.GET_ALL_MEDIA_SUCCESS;
    payload: [];
}

interface GetAllMediaListErrorAction {
    type: AllMediaListActions.GET_ALL_MEDIA_ERROR;
    payload: string;
}

type AllMediaListActionType = GetAllMediaListAction|GetAllMediaListSuccessAction|GetAllMediaListErrorAction;

interface SubmitLoginAction {
    type: UserLoginActions.SUBMIT_USER_LOGIN_DATA;
    payload: string;
}

interface UserData {
    id: number,
    username: string,
    token: string,
    avatarUrl: string,
}

interface GetUserProfileAction {
    type: UserLoginActions.GET_USER_PROFILE;
    payload: UserData;
}

interface SubmitLogoutAction {
    type: UserLoginActions.LOGOUT_USER_LOGIN;
    payload: string;
}

type userActionType = SubmitLoginAction|GetUserProfileAction|SubmitLogoutAction

export interface mediaListState {
    mediaData: [];
    loading: boolean;
    error: null|string;
}

export interface UserType {
    id: number;
    username: string;
    telephone: string;
    token: string;
    avatar: string;
}

export interface userLoginState {
    user: UserType;
    error: null|string;
    loading: boolean;
}

export interface UserDataType {
    login: string;
    password: string;
}

type propsMediaType = {
    key: number|undefined,
    media: MyMediaType,
}

export type {MyMediaType, MyMediaListType, CommentType, CommentListType, MyMediaRatingType, CommentRatingType, AllMediaListActionType, StateType, userActionType, propsMediaType}