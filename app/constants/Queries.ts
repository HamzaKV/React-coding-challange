import Fetch from '../services/fetch';
import Config from './Config';

const getImages = async (page: number) => await Fetch(
    `${Config.UNSPASH_URL}/photos?page=${page}`,
    { 
        method: 'GET', 
        headers: { 'Authorization': `Client-ID ${Config.UNSPLASH_ACCESS_KEY}` } 
    }
);

export { getImages };
