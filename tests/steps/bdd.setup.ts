import { test as base } from 'playwright-bdd';
import { createBdd } from 'playwright-bdd';

export const test = base.extend<{ customFixture: string }>({
    customFixture: ['defaultValue', { option: true }],
});

export const { Given, When, Then } = createBdd(test);