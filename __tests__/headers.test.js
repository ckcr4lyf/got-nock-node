import test from 'ava';
import nock from 'nock';
import { doStuff, doStuffWithAxios } from '../index.js';

test('got gets headers', async t => {
    const nockScope = nock(`https://fake.com`);
    nockScope.post('/path', { 'key': 'value' }).reply(200, { 'responseKey': 'responseValue' }, { 'x-custom-header': '1234' });

    const result = await doStuff();

    console.log('GOT CONSOLE LOG', result.rawHeaders, result.headers); // just to ilustrate

    t.is(result.headers['x-custom-header'], '1234', 'Did not get custom header from got!');
})

test('axios gets headers', async t => {
    const nockScope = nock(`https://fake.com`);
    nockScope.post('/path', { 'key': 'value' }).reply(200, { 'responseKey': 'responseValue' }, { 'x-custom-header': '1234' });

    const result = await doStuffWithAxios();

    console.log('AXIOS CONSOLE LOG', result.headers); // just to ilustrate

    t.is(result.headers['x-custom-header'], '1234', 'Did not get custom header from axios!');
})