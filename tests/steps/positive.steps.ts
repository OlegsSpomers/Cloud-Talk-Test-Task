import { When, Then } from './bdd.setup';
import { expect } from "@playwright/test";

When('I convert Unix Timestamp with value {string}', async ({ page }, unixValue: string) => {
    const fromUnixTimestamp = page.locator('#timestamp_1');
    await fromUnixTimestamp.fill(unixValue);
    const targetButton = fromUnixTimestamp
        .locator('..')
        .getByRole('button', { name: 'Convert To' });

    await targetButton.click();
})

When('I convert Date with value {string}', async ({ page }, dateValue: string) => {
    const fromDate = page.locator('#beijing_time_2')
    await fromDate.fill(dateValue);
    const targetButton = fromDate
        .locator('..')
        .getByRole('button', { name: 'Convert To' });

    await targetButton.click();
})

Then('Date string has value {string}', async ({ page }, dateStringValue: string) => {
    const toDateString = page.locator('#beijing_time_1');

    expect(toDateString).toHaveValue(dateStringValue);
})

Then('Timestamp string has value {string}', async ({ page }, dateStringValue: string) => {
    const toDateString = page.locator('#timestamp_2');

    expect(toDateString).toHaveValue(dateStringValue);
})