import { Component, OnInit } from '@angular/core';
import { UserClass } from 'src/app/classes/user/user';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { MasterService } from 'src/app/services/master/master.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.page.html',
  styleUrls: ['./users-crud.page.scss'],
})
export class UsersCrudPage {
  addUser: User = {
    nome: '',
    email: '',
    level: '',
    password: environment.defaultPassword,
  };
  constructor(
    public users: UserClass,
    private screen: ScreenService,
    private navigation: NavigationService,
    private auth: AuthService,
    private translate: TranslateService,
    private master: MasterService
  ) {}

  selectLevel(event) {
    this.addUser.level = event.detail.value;
  }

  async save() {
    if (
      this.addUser.nome !== '' &&
      this.addUser.email !== '' &&
      this.addUser.level !== ''
    ) {
      await this.screen.presentLoading();
      const pass: string = environment.defaultPassword;
      await this.auth.registerAdmin(this.addUser).then(() => {
        this.users.setClassAll(true, false, 'all_users').then((res) => {
          this.users.setLevels(res);
          this.master.setAll(res, this.users.value.id);
        });
        this.screen.presentToast('Usuário cadastrado com sucesso', 'success');
        this.navigation.goTo('users');
        this.screen.dismissLoading();
      });
    } else {
      this.screen.presentToast('Preencha todos os campos');
    }
  }
}
