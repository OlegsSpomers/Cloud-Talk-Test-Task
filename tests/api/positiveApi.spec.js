import { test, expect } from '@playwright/test';
import { UNIX_TIMESTAMP_CONVERTER_PATH, QUERY_FLAG } from '../../constants/apiPaths';

test.describe('API /api/unix-timestamp-converter/', () => {

    test('Convert timestamp 0 to date', async ({ request }) => {

        const response = await request.get(UNIX_TIMESTAMP_CONVERTER_PATH + QUERY_FLAG, {
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

        const response = await request.get(UNIX_TIMESTAMP_CONVERTER_PATH + QUERY_FLAG, {
            params: {
                s: '2000-01-01 00:00:00'
            }
        });

        expect(response).toBeOK();
        const text = await response.text();
        expect(text).toBe('946684800');
    });
});