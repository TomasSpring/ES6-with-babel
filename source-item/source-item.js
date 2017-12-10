//import Utils from '../utils/utils';
import {API_KEY,URL,ROOT_NODE,NEWS_BLOCK,GET_ALL_CHANELL_BUTTON} from '../config/config';
import './source-item.scss';

export default class News {
    /**
     * Inits instance
     * @param node - DOM node to instantiate class
     */
    init(node) {
        GET_ALL_CHANELL_BUTTON.addEventListener('click', (e)=> {
            
            let target = e.target;
            if (target.classList.contains('source-list-img')) {
                let source = null;
                if (target.dataset) {
                    source = target.dataset.chanel;
                    
                }
                else {
                    source =  target.getAttribute('data-chanel');
                }
                require(["module", "../utils/utils"], function(module, file) { 
                    Utils.sendRequest(source);
                });
                
            }
        });
    };
}
    
