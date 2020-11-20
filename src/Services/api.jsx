import Axios from 'axios';


const api = Axios.create({
    baseURL:'https://gateway.marvel.com:443/v1/public',
    params:{
        ts:'1565045589',
        apikey:'b79fa1ff2c1b6451278cc7984a8ecb73',
        hash:'2d96098eb8b2acb0a9ecb0a698c34717'
    },
});


export default api;