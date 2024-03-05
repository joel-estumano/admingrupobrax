import { Component, OnInit } from '@angular/core';
import { ContractClass } from 'src/app/classes/contract/contract';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-contract-home',
  templateUrl: './contract-home.page.html',
  styleUrls: ['./contract-home.page.scss'],
})
export class ContractHomePage {
  constructor(
    public contract: ContractClass,
    private menu: MenuService,
    private screen: ScreenService,
    private navigation: NavigationService
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Contrato';
    });
  }

  getDate(item) {
    return new Date(item.createdAt.seconds * 1000).toLocaleDateString();
  }

  add() {
    this.navigation.goTo('contract-crud');
  }

  edit(item) {
    this.navigation.goToParam('contract-crud', item.id);
  }

  exclude(item) {
    this.screen.presentAlertConfirm(
      'Tem certeza que deseja excluir este usuário?',
      'Essa ação é Irreversível!',
      '',
      () => {
        this.contract.delete(item.id).then(() => {
          this.contract.setClassAll();
        });
      }
    );
  }
}
