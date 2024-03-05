import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { DeliveryClass } from 'src/app/classes/delivery/delivery';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-delivery-home',
  templateUrl: './delivery-home.page.html',
  styleUrls: ['./delivery-home.page.scss'],
})
export class DeliveryHomePage extends PageCore implements OnDestroy {
  search = '';
  override tabs = [
    {
      name: 'Formas de Envio',
      selected: true,
    },
  ];
  constructor(
    public user: UserClass,
    public delivery: DeliveryClass,
    private pagination: PaginationService,
    private menu: MenuService,
    private navigation: NavigationService,
    private screen: ScreenService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Logística';
    });
  }

  ngOnDestroy(): void {
    this.delivery.show = this.delivery.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.delivery.filterActive(tab === this.tabs[0]);
    const data = this.delivery.makeData(active);
    this.delivery.makePagination(data);
  }

  edit(event) {
    const id = event.info[0];
    let call = this.delivery.find(id);
    this.delivery.data.forEach((element) => {
      element.forEach((e) => {
        if (e.info[0] === id) call = e;
      });
    });
    this.navigation.goToParam('delivery-crud', call.info[0]);
  }

  async del(event) {
    await this.screen.presentLoading();
    const id = event.info[0];
    await this.delivery.delete(id);
    this.delivery.setClassAll().then(async (res) => {
      this.delivery.makeSet(res);
      this.delivery.makePagination();
      await this.screen.dismissLoading();
    });
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.delivery.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.delivery.show = this.pagination.makeData(searched);
    this.delivery.makePagination();
  }

  add() {
    this.navigation.goTo('delivery-crud');
  }
}
