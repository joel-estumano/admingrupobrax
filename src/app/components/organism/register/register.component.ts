import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  checked = false;
  @Output() login: any = new EventEmitter();

  public userRegister: User = {};
  public confirmPassword: string = '';
  constructor(private auth: AuthService, private screen: ScreenService) {}

  async register() {
    if (!this.checked) {
      this.screen.presentToast('Você deve aceitar os termos de uso.');
      return;
    }
    await this.auth.register(this.userRegister, this.confirmPassword);
  }

  goToLogin() {
    this.login.emit();
  }
}
