import actions from '../../types/constants';
import {MyMedia} from '../../types/myTypes';

function add_media(media: MyMedia) {
    return { type: actions.ADD_MEDIA, media };
}