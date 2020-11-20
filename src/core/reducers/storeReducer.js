import { ComicsReducersTypes } from './types';
import INITIAL_STATE from  '../InitialState';


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ComicsReducersTypes.FETCH_COMICS_ADD_CART:
            if (localStorage.getItem('store')) {
                const array = JSON.parse(localStorage.getItem('store'));
                array.push(action.payload)
                localStorage.setItem('store',JSON.stringify(array));
            } else {
                const array = []
                array.push(action.payload);
                localStorage.setItem('store', JSON.stringify(array))
            }
            return { ...state,add:true}
        default:
            return {
                ...state
              }
    }

}