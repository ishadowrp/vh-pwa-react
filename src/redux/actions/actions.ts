import {actions} from '../../types/constants';
import {MyMedia, ActionType} from '../../types/myTypes';


export function setFilter(filter:string) {
    return {type: actions.SET_FILTER, payload: {filter}};
}

