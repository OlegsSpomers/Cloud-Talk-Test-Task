import { test, expect, page } from '@playwright/test';
import { listOfPages } from '../../constants/URLs';

const mainPagePath = listOfPages.get('Main Page');

test.describe('Unix Timestamp Converter', () => {

    test('Convert timestamp 0 to date', async ({ page }) => {
        const fromUnixTimestamp = page.locator('#timestamp_1');
        const toDateString = page.locator('#beijing_time_1');
        const consentModal = page.locator('[aria-label="Algorithms, Blockchain and Cloud asks for your consent to use your personal data to:"]').first();

        await page.goto(mainPagePath);
        await page.locator('#timestamp_1').fill('0');
        await consentModal.locator('[aria-label="Consent"]').click();
        const targetButton = fromUnixTimestamp
            .locator('..')
            .getByRole('button', { name: 'Convert To' });

        await targetButton.click();

        expect(toDateString).toHaveValue('1970-01-01 1:0:00');
    })
});