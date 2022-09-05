import React from 'react';
import {connect} from "react-redux";
import { setFilter } from "../redux/actions/actions";
import {VISIBILITY_FILTERS} from "../types/constants";
import MediaList from './MediaList'

function AllMedia() {

    setFilter(VISIBILITY_FILTERS.ALL)

    return (
        <MediaList/>
    )
}

function mapStateToProps(state:any) {
    return {activeFilter: state.visibilityFilter};
}

export default connect(
    mapStateToProps,
    { setFilter }
)(AllMedia);
