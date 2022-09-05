import {VISIBILITY_FILTERS} from "../types/constants";
import axios from 'axios';
import {MyMediaList} from '../types/myTypes';

async function getAllMediaList() {
    await axios.get<MyMediaList>('http://127.0.0.1:8000/api/v1/media/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + 'aqJjm5Di7lh5wFE6K8GUi67W9Q2nJ5lOjCQPqGdG94qqtFdHLqGNwju2NtyELOPT',
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    }).catch((error) => {
        console.log(error);
    })
}

async function getMostPopular() {
    await axios.get<MyMediaList>('http://127.0.0.1:8000/api/v1/media/order?ordering=-views_count', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + 'aqJjm5Di7lh5wFE6K8GUi67W9Q2nJ5lOjCQPqGdG94qqtFdHLqGNwju2NtyELOPT',
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data.slice(0, 10);
        }
    }).catch((error) => {
        console.log(error);
    })
}

async function getLast10() {
    await axios.get<MyMediaList>('http://127.0.0.1:8000/api/v1/media/order?ordering=-date_posted', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + 'aqJjm5Di7lh5wFE6K8GUi67W9Q2nJ5lOjCQPqGdG94qqtFdHLqGNwju2NtyELOPT',
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data.slice(0, 10);
        }
    }).catch((error) => {
        console.log(error);
    })
}

export const getMediaByVisibilityFilter = (store:any, visibilityFilter:string) => {
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.LAST10:
            return getLast10();
        case VISIBILITY_FILTERS.MOST_POPULAR:
            return getMostPopular();
        default:
            return getAllMediaList();
    }
};