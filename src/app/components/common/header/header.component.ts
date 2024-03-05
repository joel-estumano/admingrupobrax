import { Component } from '@angular/core';
import { UserClass } from 'src/app/classes/user/user';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public user: UserClass,
    private auth: AuthService,
    private navigation: NavigationService
  ) {}

  logout() {
    this.auth.logout();
  }

  goTo(url) {
    this.navigation.goTo(url);
  }
}
