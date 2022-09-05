import React from 'react';
import {getMediaByVisibilityFilter} from '../redux/selectors'
import {connect} from "react-redux";
import {MyMedia, MyMediaList } from '../types/myTypes';

function MediaList(medias:MyMediaList) {
    return (
        {medias.map((media: MyMedia) => <Media key={media.id} media={media}/>)}
    );
}

function mapStateToProps(state:any) {
    const {visibilityFilter} = state;
    const medias = getMediaByVisibilityFilter(state, visibilityFilter);
    return {medias};
}

export default connect(mapStateToProps)(MediaList);
