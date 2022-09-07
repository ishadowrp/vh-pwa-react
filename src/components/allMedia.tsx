import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import Media from "./Media";
import {MyMediaType} from "../types/myTypes";
import {getAxiosAllMedia} from "../store/actions/mediaList";

function AllMedia() {
    const {mediaData, error, loading} = useAppSelector(state => state.mediaList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAxiosAllMedia())
    }, [])

    console.log(mediaData);
    console.log(error);
    console.log(loading);
    return (
        <React.Fragment>
            {mediaData.map((media:MyMediaType) => <Media key = {media.id} media = {media}/>)}
        </React.Fragment>
    )
}

export default AllMedia