import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly buttonZalogujSie: Locator;
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly buttonLogowaniaKeycloak: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonZalogujSie = this.page.getByRole('button', { name: 'Zaloguj się'});
        this.loginInput = this.page.getByLabel(/Login domenowy/);
        this.passwordInput = this.page.getByLabel(/Hasło domenowe/);
        this.buttonLogowaniaKeycloak = this.page.getByRole('button', { name: 'Logowanie'});
    }

    async zalogujDoSystemu(login: string, haslo: string){
        await this.buttonZalogujSie.click();
        await this.page.waitForURL(/.*keycloak.*/);
        await this.loginInput.fill(login);
        await this.passwordInput.fill(haslo);
        await this.buttonLogowaniaKeycloak.click();
        await this.page.waitForURL(/.*panel-administracyjny.*/);
    }
}

