import got from 'got';


export const doStuff = () => {
    return got.post('https://fake.com/path', { json: { 'key': 'value' }});
}

