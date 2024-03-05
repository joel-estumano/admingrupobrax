import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { DevolutionClass } from 'src/app/classes/devolutions/devolutions';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-devolutions-home',
  templateUrl: './devolutions-home.page.html',
  styleUrls: ['./devolutions-home.page.scss'],
})
export class DevolutionsHomePage extends PageCore implements OnDestroy {
  search = '';
  override tabs = [
    {
      name: 'Motivos de Devolução',
      selected: true,
    },
  ];
  constructor(
    public user: UserClass,
    public devolutions: DevolutionClass,
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
    this.devolutions.show = this.devolutions.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.devolutions.filterActive(tab === this.tabs[0]);
    const data = this.devolutions.makeData(active);
    this.devolutions.makePagination(data);
  }

  edit(event) {
    const id = event.info[0];
    let call = this.devolutions.find(id);
    this.devolutions.data.forEach((element) => {
      element.forEach((e) => {
        if (e.info[0] === id) call = e;
      });
    });
    this.navigation.goToParam('devolutions-crud', call.info[0]);
  }

  async del(event) {
    await this.screen.presentLoading();
    const id = event.info[0];
    await this.devolutions.delete(id);
    this.devolutions.setClassAll().then(async (res) => {
      this.devolutions.makeSet(res);
      this.devolutions.makePagination();
      await this.screen.dismissLoading();
    });
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.devolutions.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.devolutions.show = this.pagination.makeData(searched);
    this.devolutions.makePagination();
  }

  add() {
    this.navigation.goTo('devolutions-crud');
  }
}
