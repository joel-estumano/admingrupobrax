import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { SupportCategoriesClass } from 'src/app/classes/categories/supportCategories';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-support-categories-home',
  templateUrl: './support-categories-home.page.html',
  styleUrls: ['./support-categories-home.page.scss'],
})
export class SupportCategoriesHomePage extends PageCore implements OnDestroy {
  search = '';
  override tabs = [
    {
      name: 'Categorias de Suporte',
      selected: true,
    },
  ];
  constructor(
    public user: UserClass,
    public supportCategories: SupportCategoriesClass,
    private pagination: PaginationService,
    private menu: MenuService,
    private navigation: NavigationService,
    private screen: ScreenService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Ajuda e Suporte';
    });
  }

  ngOnDestroy(): void {
    this.supportCategories.show = this.supportCategories.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.supportCategories.filterActive(tab === this.tabs[0]);
    const data = this.supportCategories.makeData(active);
    this.supportCategories.makePagination(data);
  }

  edit(event) {
    const id = event.info[0];
    let call = this.supportCategories.find(id);
    this.supportCategories.data.forEach((element) => {
      element.forEach((e) => {
        if (e.info[0] === id) call = e;
      });
    });
    this.navigation.goToParam('supportCategories-crud', call.info[0]);
  }

  async del(event) {
    await this.screen.presentLoading();
    const id = event.info[0];
    await this.supportCategories.delete(id);
    this.supportCategories.setClassAll().then(async (res) => {
      this.supportCategories.makeSet(res);
      this.supportCategories.makePagination();
      await this.screen.dismissLoading();
    });
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.supportCategories.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.supportCategories.show = this.pagination.makeData(searched);
    this.supportCategories.makePagination();
  }

  add() {
    this.navigation.goTo('supportCategories-crud');
  }
}
