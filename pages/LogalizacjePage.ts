import { Page, Locator } from '@playwright/test';

export class LokalizacjePage {
    readonly page: Page;
    readonly linkMenuLokalizacje: Locator;
    readonly buttonDodajLokalizacje: Locator;


    constructor(page: Page) {
        this.page = page;
        this.linkMenuLokalizacje = this.page.getByRole('link', { name: 'Lokalizacje', exact: true});
        this.buttonDodajLokalizacje = this.page.getByRole('button', {name: 'Dodaj lokalizacje'});
    }
    async przejdzDoLokalizacji() {
        await this.linkMenuLokalizacje.click();
        await this.page.waitForURL(/.*lokalizacje.*/);
    }
}
