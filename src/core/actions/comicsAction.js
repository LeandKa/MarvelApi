import api from '../../Services/api';
import { ComicsActionTypes } from './types';




export function showSearch(data,title) {

    let obs = {
        title:title,
        data:data,
        pageNumber:1
    }
    return {
        type: ComicsActionTypes.FETCH_COMICS_SEARCH,
        payload: obs
    }
}

export function showPagination(pageNumber,data) {
    let obs = {
        pageNumber:pageNumber,
        data:data
    }
    return {
        type: ComicsActionTypes.FETCH_COMICS_Get_Comics_Pagination,
        payload: obs
    }
}

export function getComics() {
    const request = api.get('/comics');
    return {
        type: ComicsActionTypes.FETCH_COMICS_GET_ALL,
        payload: request
    }
}

export function getComicsPagination(pageNumber, limit,title) {

    const offset = (limit * pageNumber) - limit;
    return (dispatch) =>{
      api.get('/comics', {params: {titleStartsWith: title,limit, offset}})
      .then(response =>{
        return dispatch(showPagination(pageNumber,response))
      })
      .catch(err => {
        dispatch({ type: ComicsActionTypes.FETCH_COMICS_SEARCH_ERROR, payload: err })
    })
    }
}

export function getSearch(title) {
    return (dispatch) => {
        api.get('/comics', {
            params: {
                titleStartsWith: title
            }
        })
            .then(response => {
               return  dispatch(showSearch(response,title));
            })
            .catch(err => {
                dispatch({ type: ComicsActionTypes.FETCH_COMICS_SEARCH_ERROR, payload: err })
            })
    }

}