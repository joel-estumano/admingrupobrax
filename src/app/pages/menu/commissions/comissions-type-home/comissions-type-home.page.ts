import { Component, OnDestroy, OnInit } from '@angular/core';
import { FinanceCategoriesClass } from 'src/app/classes/categories/finance-categories';
import { CommissionTypesClass } from 'src/app/classes/commissions/commission-types';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-comissions-type-home',
  templateUrl: './comissions-type-home.page.html',
  styleUrls: ['./comissions-type-home.page.scss'],
})
export class ComissionsTypeHomePage extends PageCore implements OnDestroy {
  search = '';
  constructor(
    public user: UserClass,
    public types: CommissionTypesClass,
    private pagination: PaginationService,
    private menu: MenuService,
    private navigation: NavigationService,
    private screen: ScreenService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Categoria Financeira';
    });
  }

  ngOnDestroy(): void {
    this.types.show = this.types.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.types.filterActive(tab === this.tabs[0]);
    const data = this.types.makeData(active);
    this.types.makePagination(data);
  }

  edit(event) {
    const id = event.info[0];
    let call = this.types.find(id);
    this.types.data.forEach((element) => {
      element.forEach((e) => {
        if (e.info[0] === id) call = e;
      });
    });
    this.navigation.goToParam('commissions-type-crud', call.info[0]);
  }

  async del(event) {
    await this.screen.presentLoading();
    const id = event.info[0];
    await this.types.delete(id);
    this.types.setClassAll().then(async (res) => {
      this.types.makeSet(res);
      this.types.makePagination();
      await this.screen.dismissLoading();
    });
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.types.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.types.show = this.pagination.makeData(searched);
    this.types.makePagination();
  }

  add() {
    this.navigation.goTo('commissions-type-crud');
  }
}