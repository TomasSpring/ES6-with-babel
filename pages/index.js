import {API_KEY,URL,ROOT_NODE,NEWS_BLOCK,GET_ALL_CHANELL_BUTTON} from '../config/config';

import './index.scss';
import News from '../source-item/source-item';

document.addEventListener( 'DOMContentLoaded', (e) => {
    let newsInstance = new News();
    newsInstance.init(ROOT_NODE);
}, false );

