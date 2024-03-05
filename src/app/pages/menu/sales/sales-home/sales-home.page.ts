import { Component, OnDestroy } from '@angular/core';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { SaleClass } from 'src/app/classes/sale/sale';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Component({
  selector: 'app-sales-home',
  templateUrl: './sales-home.page.html',
  styleUrls: ['./sales-home.page.scss'],
})
export class SalesHomePage extends PageCore implements OnDestroy {
  search = '';
  override tabs = [
    {
      name: 'Vendas',
      selected: true,
    },
    {
      name: 'Exclusões',
      selected: false,
    },
  ];
  constructor(
    public user: UserClass,
    public sales: SaleClass,
    private pagination: PaginationService,
    private menu: MenuService,
    private navigation: NavigationService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Vendas';
    });
  }

  ngOnDestroy(): void {
    this.sales.show = this.sales.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.sales.filterActive(tab === this.tabs[0]);
    const data = this.sales.makeData(active);
    this.sales.makePagination(data);
  }

  edit(event) {
    const id = event.info[0];
    let call = this.sales.find(id);
    this.sales.data.forEach((element) => {
      element.forEach((e) => {
        if (e.info[0] === id) call = e;
      });
    });
    this.navigation.goToParam('sales-crud', call.info[0]);
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.sales.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.sales.show = this.pagination.makeData(searched);
    this.sales.makePagination();
  }
}
