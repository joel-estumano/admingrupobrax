import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryClass } from 'src/app/classes/delivery/delivery';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-delivery-crud',
  templateUrl: './delivery-crud.page.html',
  styleUrls: ['./delivery-crud.page.scss'],
})
export class DeliveryCrudPage {
  id = '';
  object = {
    name: '',
  };
  constructor(
    private screen: ScreenService,
    private navigation: NavigationService,
    private delivery: DeliveryClass,
    private menu: MenuService,
    private route: ActivatedRoute
  ) {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Logística';
    });
    this.route.queryParams.subscribe(async (params: any) => {
      this.id = params.params;

      if (this.id) {
        const find = this.delivery.find(this.id);
        this.object = find ? find : await this.delivery.getHttp(this.id);

        console.log(this.object);
      }
    });
  }

  back() {
    this.navigation.goTo('delivery-home');
  }

  async save() {
    await this.screen.presentLoading();
    if (this.id) {
      await this.delivery.update(this.object, this.id);
    } else {
      await this.delivery.add(this.object);
    }
    this.delivery.setClassAll().then(async (res) => {
      this.delivery.makeSet(res);
      this.delivery.makePagination();
      await this.screen.dismissLoading();
      this.back();
    });
  }
}
