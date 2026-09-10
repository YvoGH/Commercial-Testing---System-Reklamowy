import { Page, Locator } from '@playwright/test';

export class LokalizacjePage {
    readonly page: Page;
    readonly linkMenuLokalizacje: Locator;
    readonly buttonDodajLokalizacje: Locator;
    readonly modal: Locator;
    readonly inputKlifUuid: Locator;
    readonly inputNazwa: Locator;
    readonly inputMiasto: Locator;
    readonly buttonZapiszLokalizacje: Locator;

    constructor(page: Page) {
        this.page = page;
        this.linkMenuLokalizacje = this.page.getByRole('link', { name: 'Lokalizacje', exact: true});
        this.buttonDodajLokalizacje = this.page.getByRole('button', { name: 'Dodaj lokalizację' });
        this.modal = this.page.getByRole('dialog');
        this.inputKlifUuid = this.modal.getByLabel('KLIF UUID');
        this.inputMiasto = this.modal.getByLabel('Miasto');
        this.inputNazwa = this.modal.getByLabel('Nazwa');
        this.buttonZapiszLokalizacje = this.modal.getByTestId('location-form-submit');
    }
    async przejdzDoLokalizacji() {
        await this.linkMenuLokalizacje.click();
        await this.page.waitForURL(/.*lokalizacje.*/);
    }
