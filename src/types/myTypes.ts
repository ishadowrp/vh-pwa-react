export interface AppProps {
    id?: string;
}

type MyMedia = {
    id?: number,
    title: string,
    description: string,
    media: string,
    author:	number,
    date_posted?: string,
    views_count?: number,
    current_rating?: string
}

type MyMediaList = [MyMedia]

type Comment = {
    id?: number,
    media:	number,
    author:	number,
    date_posted?: string,
    current_rating:	string,
    content: string,
}

type CommentList = [Comment]

type MyMediaRating = {
    id?: number,
    media: number,
    author:	number,
    rating:	number,

}

type CommentRating = {
    id?: number,
    comment: number,
    author:	number,
    rating:	number,
}

type ActionType = {
    type: string,
    data: MyMediaRating,
}

export type {MyMedia, MyMediaList, Comment, CommentList, MyMediaRating, CommentRating, ActionType}