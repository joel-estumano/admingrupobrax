import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public forgot = false;
  public pages = ['Login', 'Register'];
  public current_page = this.pages[0];

  async login() {
    this.current_page = this.pages[0];

    if (this.forgot) {
      this.forgot = false;
    }
  }

  async register() {
    this.current_page = this.pages[1];
  }

  goToForgot(bool: boolean) {
    this.forgot = bool;
  }
}
