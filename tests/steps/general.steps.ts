import { listOfPages } from '../../constants/URLs';
import { Given, When } from './bdd.setup';

Given('I open page {string}', async ({ page }, pageName: string) => {
    const pagePath = listOfPages.get(pageName);
    if (!pagePath) {
        throw new Error(`Page '${pageName}' not defined in listOfPages Map.`);
    }
    await page.goto(pagePath);
})

When('I close Consent page', async ({ page }) => {
    const consentModal = page.locator('[aria-label="Algorithms, Blockchain and Cloud asks for your consent to use your personal data to:"]');
    await consentModal.locator('[aria-label="Consent"]').click();
})