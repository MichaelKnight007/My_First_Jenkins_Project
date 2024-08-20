import { BasePage } from "./BasePage";
import {Locator } from "@playwright/test";

export class LoginPage extends BasePage {

  public readonly usernameInput: Locator 
    = this.page.locator("//input[@id='inputEmail']");

  public readonly passwordInput: Locator 
    = this.page.locator("//input[@id='inputPassword']");

  public readonly loginButton: Locator 
    = this.page.locator("//button[text()='Sign in']");

  async enterUsername(username: string | null = null) {
    if (username == null) {
      await this.usernameInput.fill(this.username);
    } else {
      await this.usernameInput.fill(username);
    }
  }

  async enterPassword(password: string | null = null) {
    if (password == null) {
      await this.passwordInput.fill(this.password);
    } else {
      await this.passwordInput.fill(password);
    }
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

}