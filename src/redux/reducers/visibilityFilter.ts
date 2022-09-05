import {actions, VISIBILITY_FILTERS} from "../../types/constants";

const initialState = VISIBILITY_FILTERS.LAST10;

const visibilityFilter = (state = initialState, action:any) => {
    switch (action.type) {
        case actions.SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;