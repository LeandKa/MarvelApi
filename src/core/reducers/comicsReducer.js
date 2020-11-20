import { ComicsReducersTypes } from './types';
import INITIAL_STATE from  '../InitialState';



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ComicsReducersTypes.FETCH_COMICS_GET_ALL:
            return {
                ...state, comics: action.payload.data.data.results,
                total: action.payload.data.data.total, loading: true, limit: action.payload.data.data.limit
            }
        case ComicsReducersTypes.FETCH_COMICS_Get_Comics_Pagination:
            return {
                ...state,comics: action.payload.data.data.data.results,
                total: action.payload.data.data.data.total, loading: true, limit: action.payload.data.data.data.limit
                ,pageNumber:action.payload.pageNumber
            }
        case ComicsReducersTypes.FETCH_COMICS_SEARCH:
            return {
                ...state, comics: action.payload.data.data.data.results,
                total: action.payload.data.data.data.total, loading: true, limit: action.payload.data.data.data.limit
                , title: action.payload.title,pageNumber:action.payload.pageNumber
            }
        case ComicsReducersTypes.FETCH_COMICS_SEARCH_ERROR:
            return { Error: action.payload }
        case ComicsReducersTypes.FETCH_COMICS_SEARCH_EMPTY:
            return { Empty: action.payload }
        case ComicsReducersTypes.FETCH_COMICS_SEARCH_TITLE:
            return { Title: action.payload }
        default:
            return state
    }

}