import {MyMediaList, ActionType} from "../../types/myTypes";
import {actions} from "../../types/constants";


const mediaListReducer = (state:MyMediaList, action:ActionType) => {
    switch (action.type) {
        case actions.ADD_MEDIA :
           return {
                ...state,
                            }
        default:
            return state
    }

}

export default mediaListReducer