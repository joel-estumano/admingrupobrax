import { Component, OnInit } from '@angular/core';
import { PaymentClass } from 'src/app/classes/payments/payments';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-payments-home',
  templateUrl: './payments-home.page.html',
  styleUrls: ['./payments-home.page.scss'],
})
export class PaymentsHomePage {
  constructor(
    public payment: PaymentClass,
    private menu: MenuService,
    private screen: ScreenService,
    private navigation: NavigationService
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Pagamentos';
    });
  }

  add() {
    this.navigation.goTo('payments-crud');
  }

  edit(item) {
    this.navigation.goToParam('payments-crud', item.id);
  }

  exclude(item) {
    this.screen.presentAlertConfirm(
      'Tem certeza que deseja excluir este usuário?',
      'Essa ação é Irreversível!',
      '',
      () => {
        this.payment.delete(item.id).then(() => {
          this.payment.setClassAll();
        });
      }
    );
  }
}
