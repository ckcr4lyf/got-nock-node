import got from 'got';
import axios from 'axios';


export const doStuff = () => {
    return got.post('https://fake.com/path', { json: { 'key': 'value' }});
}

export const doStuffWithAxios = () => {
    return axios.post('https://fake.com/path', { 'key': 'value' });
}