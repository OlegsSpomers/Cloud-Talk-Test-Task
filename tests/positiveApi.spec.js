import { test, expect } from '@playwright/test';

test.describe('API /api/unix-timestamp-converter/', () => {

    const BASE_URL = 'https://helloacm.com/api/unix-timestamp-converter/';
    const QUERY_FLAG = '?cached';

    test('Convert timestamp 0 to date', async ({ request }) => {


        const response = await request.get(BASE_URL + QUERY_FLAG, {
            params: {
                s: 0
            }
        });

        expect(response).toBeOK();

        const rawText = await response.text();

        const cleanedText = rawText.replace(/^"|"$/g, '');

        expect(cleanedText).toBe('1970-01-01 12:00:00');
    });


    test('Convert string date to Timestamp', async ({ request }) => {

        const response = await request.get(BASE_URL, {
            params: {
                s: '2000-01-01 00:00:00'
            }
        });

        expect(response.ok()).toBeTruthy();
        const text = await response.text();
        expect(text).toBe('946684800');
    });


    test('Invalid request', async ({ request }) => {

        const response = await request.get(BASE_URL, {
            params: {
                s: 'это точно не дата'
            }
        });

        expect(response.ok()).toBeTruthy();
        const text = await response.text();

        expect(text).toContain('false');
    });

});