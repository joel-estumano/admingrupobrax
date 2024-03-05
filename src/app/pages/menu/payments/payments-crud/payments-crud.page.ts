import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentClass } from 'src/app/classes/payments/payments';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';
import { TranslateService } from 'src/app/services/translate/translate.service';

@Component({
  selector: 'app-payments-crud',
  templateUrl: './payments-crud.page.html',
  styleUrls: ['./payments-crud.page.scss'],
})
export class PaymentsCrudPage {
  id: string;
  payment = {
    title: '',
  };

  constructor(
    public paymentClass: PaymentClass,
    private navigation: NavigationService,
    private translate: TranslateService,
    private screen: ScreenService,
    private menu: MenuService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(async (params: any) => {
      if (params) {
        this.id = params.param;
        if (this.id) {
          const data = this.paymentClass.find(this.id);
          this.payment = data ? data : await this.paymentClass.getHttp(this.id);
        }
      }
    });
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Pagamentos';
    });
  }

  save() {
    if (!this.id) {
      this.paymentClass
        .add(this.payment)
        .then(() => {
          this.paymentClass
            .setClassAll()
            .then(() => {
              this.navigation.goTo('payments-home');
            })
            .catch((err) => {
              this.screen.presentToast(this.translate.verifyErrors(err.code));
            });
        })
        .catch((err) => {
          this.screen.presentToast(this.translate.verifyErrors(err.code));
        });
    } else {
      this.paymentClass
        .update(this.payment, this.id)
        .then(() => {
          this.paymentClass
            .setClassAll()
            .then(() => {
              this.navigation.goTo('payments-home');
            })
            .catch((err) => {
              this.screen.presentToast(this.translate.verifyErrors(err.code));
            });
        })
        .catch((err) => {
          this.screen.presentToast(this.translate.verifyErrors(err.code));
        });
    }
  }
}
