import {combineReducers} from 'redux';
import comicsReducer from '../core/reducers/comicsReducer';
import storeReducer from './reducers/storeReducer';
import {reducer as toastrReducer} from 'react-redux-toastr'


export default combineReducers({
    comics:comicsReducer,
    toastr: toastrReducer,
    store:storeReducer
})