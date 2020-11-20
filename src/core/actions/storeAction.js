import { ComicsActionTypes } from './types';


export function addStore(data){
    if (localStorage.getItem('store')) {
        const array = JSON.parse(localStorage.getItem('store'));
        let filter = array.filter((filtro) =>{
            return filtro.id === data.id
        })
        console.log(filter.length)
        if(filter.length == 0){
            let object = {
                id:data.id,
                title:data.title,
                thumbnail:data.thumbnail,
                price:data.prices[0].price
            }
            array.push(object)
            localStorage.setItem('store',JSON.stringify(array));
            alert('add to cart')
        }else{
            console.log('Nada')
        }
    } else {
        const array = []
        let object = {
            id:data.id,
            title:data.title,
            thumbnail:data.thumbnail,
            price:data.prices[0].price
        }
        array.push(object);
        localStorage.setItem('store', JSON.stringify(array))
        alert('add to cart')
    }
    return {
        type: ComicsActionTypes.FETCH_COMICS_ADD_CART,
        payload: true
    }
}