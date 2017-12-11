import {API_KEY,URL,ROOT_NODE,NEWS_BLOCK,GET_ALL_CHANELL_BUTTON} from '../config/config';

import './index.scss';

document.addEventListener('DOMContentLoaded', () => {

    let showNewsbutton = document.querySelector('.js-show-default-source');
    
    showNewsbutton.onclick = e => import( './show-news-button.js')
        .then(module => {
            let showNewsButton = module.default;
            showNewsButton();
            showNewsbutton.classList.add('show-news-container__btn_hidden');
           
        })
        .catch((e) => {
            console.error('error: ', e)
        });
});
