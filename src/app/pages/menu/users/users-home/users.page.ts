import { Component } from '@angular/core';
import { UserClass } from 'src/app/classes/user/user';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { MasterService } from 'src/app/services/master/master.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage {
  usersToUpdate: any = [];
  constructor(
    public users: UserClass,
    private menu: MenuService,
    private screen: ScreenService,
    private navigation: NavigationService,
    private auth: AuthService,
    private master: MasterService
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Usuários';
    });
  }

  getDate(user) {
    return new Date(user.createdAt.seconds * 1000).toLocaleDateString();
  }

  selectUser(user) {
    const inputs = this.users.levels.map((e) => {
      return {
        value: e,
        type: 'radio',
        label: e.name,
        checked: user.level.level == e.level,
      };
    });
    this.screen.presentAlertRadio(
      '',
      'Nível do Usuário',
      '',
      inputs,
      (res) => {
        user.level = res.level;
        user.levelInfo = this.users.getLevel(res);
        this.usersToUpdate.push(user);
      },
      () => {}
    );
  }

  add() {
    this.navigation.goTo('users-crud');
  }

  exclude(user) {
    this.screen.presentAlertConfirm(
      'Tem certeza que deseja excluir este usuário?',
      'Essa ação é Irreversível!',
      '',
      async () => {
        const images = Object.keys(user)
          .map((e) => {
            if (
              (e === 'doc_cpf' ||
                e === 'doc_company' ||
                e === 'doc_residence') &&
              user[e].url
            )
              return user[e].url;
          })
          .filter((e) => {
            if (e) return e;
          });
        await this.screen.presentLoading();
        this.auth.deleteAdmin(user.id).then(() => {
          this.users.delete(user.id, images.length > 0, images).then(() => {
            this.users.setClassAll(true, false, 'all_users').then((res) => {
              this.users.setLevels(res);
              this.master.setAll(res, this.users.value.id);
            });

            this.screen.dismissLoading();
          });
        });
      }
    );
  }

  async send() {
    await Promise.all(
      this.usersToUpdate.map(async (e) => {
        console.log(e);
        await this.users.update(e, e.id);
      })
    ).then(() => {
      this.screen.presentToast('Usuários atualizados com sucesso!', 'success');
      this.users.setClassAll(true).then((res) => {
        this.users.setLevels(res);
        this.navigation.goTo('users');
      });
    });
  }
}
