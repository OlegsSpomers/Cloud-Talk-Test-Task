import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

const BASE_URL = 'https://helloacm.com';
const API_PATH = '/api/unix-timestamp-converter/';
const QUERY_FLAG = '?q=';

const data = new SharedArray('randomTimestamps', function () {
    const timestamps = [];

    for (let i = 0; i < 1000; i++) {
        timestamps.push(Math.floor(Math.random() * 2000000000));
    }
    return timestamps;
});


export const options = {

    stages: [
        { duration: '30s', target: 10 },
        { duration: '1m', target: 10 },
        { duration: '10s', target: 0 },
    ],

    thresholds: {
        'http_req_duration': ['p(95)<300'],
        'http_req_failed': ['rate<0.01'],
        'checks': ['rate>0.99'],
    },

    ext: {
        loadimpact: {

        },
    },
};

export default function () {

    let res = http.get(`${BASE_URL}${API_PATH}${QUERY_FLAG}s=0`);

    check(res, {
        'Status is 200 (Timestamp->Date)': (r) => r.status === 200,
        'Correct body (Timestamp->Date)': (r) => {
            return r.body.includes('1970-01-01 12:00:00');
        },
    });

    res = http.get(`${BASE_URL}${API_PATH}${QUERY_FLAG}s=2000-01-01 00:00:00`);

    check(res, {
        'Status is 200 (Date->Timestamp)': (r) => r.status === 200,
        'Correct body (Date->Timestamp)': (r) => r.body === '946684800',
    });

    const randomTimestamp = data[__VU * __ITER % data.length];
    res = http.get(`${BASE_URL}${API_PATH}${QUERY_FLAG}s=${randomTimestamp}`);

    check(res, {
        'Status is 200 (Random)': (r) => r.status === 200,
    });

    sleep(1);
}