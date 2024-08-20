import { Page } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export class BasePage {
  page: Page;
  librarayUrl: string;
  username: string;
  password: string;

  constructor(page: any) {
    this.page = page;
    this.librarayUrl = process.env.LIBRARY_URL as string;
    this.username = process.env.LIBRARY_STUDENT_USERNAME as string;
    this.password = process.env.LIBRARY_STUDENT_PASSWORD as string;
  }

  /**
   * A method to introduce a delay in the execution of the test script.
   *
   * @remarks
   * This method is useful for simulating user actions or waiting for asynchronous operations.
   *
   * @param seconds - The number of seconds to wait before resolving the promise.
   *
   * @returns A promise that resolves after the specified number of seconds.
   */
  async sleep(seconds: number): Promise<void> {
    await this.page.waitForTimeout(seconds * 1000);
  }
}
