export default interface AppProps {
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

type MediaList = [MyMedia]

type Comment = {
    id?: number,
    media:	number,
    author:	number,
    date_posted?: string,
    current_rating:	string,
    content: string,
}

type CommentList = [Comment]



export type {MyMedia, MediaList, }