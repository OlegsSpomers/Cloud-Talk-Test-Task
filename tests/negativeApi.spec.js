import { test, expect } from '@playwright/test';
import { UNIX_TIMESTAMP_CONVERTER_PATH, QUERY_FLAG } from '../constants/apiPaths';

test.describe('API /api/unix-timestamp-converter/', () => {

    test('Invalid parameters', async ({ request }) => {

        const response = await request.get(UNIX_TIMESTAMP_CONVERTER_PATH + QUERY_FLAG, {
            params: {
                s: 'invalid'
            }
        });

        expect(response).toBeOK();
        const text = await response.text();

        expect(text).toContain('false');
    });

    test('No cashed parameter', async ({ request }) => {

        const response = await request.get(UNIX_TIMESTAMP_CONVERTER_PATH, {
            params: {
                s: '10'
            }
        });

        expect(response.status()).toBe(404);
    });

});