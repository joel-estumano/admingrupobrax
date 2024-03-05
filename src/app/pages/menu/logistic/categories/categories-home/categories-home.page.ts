import { Component, OnDestroy } from '@angular/core';
import { CategoriesClass } from 'src/app/classes/categories/categories';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-categories-home',
  templateUrl: './categories-home.page.html',
  styleUrls: ['./categories-home.page.scss'],
})
export class CategoriesHomePage extends PageCore implements OnDestroy {
  search = '';
  override tabs = [
    {
      name: 'Categorias',
      selected: true,
    },
  ];
  constructor(
    public user: UserClass,
    public categories: CategoriesClass,
    private pagination: PaginationService,
    private menu: MenuService,
    private navigation: NavigationService,
    private screen: ScreenService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Orçamentos';
    });
  }

  ngOnDestroy(): void {
    this.categories.show = this.categories.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.categories.filterActive(tab === this.tabs[0]);
    const data = this.categories.makeData(active);
    this.categories.makePagination(data);
  }

  edit(event) {
    const id = event.info[0];
    let call = this.categories.find(id);
    this.categories.data.forEach((element) => {
      element.forEach((e) => {
        if (e.info[0] === id) call = e;
      });
    });
    this.navigation.goToParam('logistic-categories-crud', call.info[0]);
  }

  async del(event) {
    await this.screen.presentLoading();
    const id = event.info[0];
    await this.categories.delete(id);
    this.categories.setClassAll().then(async (res) => {
      this.categories.makeSet(res);
      this.categories.makePagination();
      await this.screen.dismissLoading();
    });
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.categories.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.categories.show = this.pagination.makeData(searched);
    this.categories.makePagination();
  }

  add() {
    this.navigation.goTo('logistic-categories-crud');
  }
}