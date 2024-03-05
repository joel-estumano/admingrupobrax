import { Component, OnDestroy } from '@angular/core';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { StocksClass } from 'src/app/classes/stock/stock';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.page.html',
  styleUrls: ['./stock-home.page.scss'],
})
export class StockHomePage extends PageCore implements OnDestroy {
  search = '';
  override tabs = [
    {
      name: 'Operadoras',
      selected: true,
    },
  ];
  constructor(
    public user: UserClass,
    public stock: StocksClass,
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
    this.stock.show = this.stock.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.stock.filterActive(tab === this.tabs[0]);
    const data = this.stock.makeData(active);
    this.stock.makePagination(data);
  }

  edit(event) {
    const id = event.info[0];
    let call = this.stock.find(id);
    this.stock.data.forEach((element) => {
      element.forEach((e) => {
        if (e.info[0] === id) call = e;
      });
    });
    this.navigation.goToParam('stock-crud', call.info[0]);
  }

  async del(event) {
    await this.screen.presentLoading();
    const id = event.info[0];
    await this.stock.delete(id);
    this.stock.setClassAll().then(async (res) => {
      this.stock.makeSet(res);
      this.stock.makePagination();
      await this.screen.dismissLoading();
    });
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.stock.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.stock.show = this.pagination.makeData(searched);
    this.stock.makePagination();
  }

  add() {
    this.navigation.goTo('stock-crud');
  }
}
