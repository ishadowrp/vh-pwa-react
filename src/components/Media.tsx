import React from 'react';
import {propsMediaType} from "../types/myTypes";


function Media(props: propsMediaType) {
    return (
        <React.Fragment>
            <div>{props.media.id}</div>
            <div>{props.media.author}</div>
            <div>{props.media.date_posted}</div>
            <div>{props.media.title}</div>
            <div>{props.media.description}</div>
            <div>{props.media.current_rating}</div>
            <div>{props.media.views_count}</div>
            <div>{props.media.media}</div>
        </React.Fragment>
    )
}

export default Media;