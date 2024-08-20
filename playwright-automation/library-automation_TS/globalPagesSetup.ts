import { Page } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { UsersPage } from "./pages/UsersPage";
import { BorrowingBooksPage } from "./pages/BorrowingBooksPage";
import { BooksPage } from "./pages/BooksPage";
// Import OTHER PAGE CLASSES HERE...



export let loginPage: LoginPage;
export let dashboardPage: DashboardPage;
export let usersPage: UsersPage;
export let borrowingBooksPage: BorrowingBooksPage;
export let booksPage: BooksPage;
// Export OTHER PAGE CLASS REFERENCES HERE...



export const initElements = (page: Page): void => {
  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page);
  usersPage = new UsersPage(page);
  borrowingBooksPage = new BorrowingBooksPage(page);
  booksPage = new BooksPage(page);
  // ADD OTHER PAGE CLASS INSTANCES HERE...


};
