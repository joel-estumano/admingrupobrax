import { Component, OnDestroy, OnInit } from '@angular/core';
import { CancellationReasonClass } from 'src/app/classes/cancellationReason/cancellationReason';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { ScreenService } from 'src/app/services/screen/screen.service';

@Component({
  selector: 'app-cancellation-reason-home',
  templateUrl: './cancellation-reason-home.page.html',
  styleUrls: ['./cancellation-reason-home.page.scss'],
})
export class CancellationReasonHomePage extends PageCore implements OnDestroy {
  search = '';
  override tabs = [
    {
      name: 'Motivos de Cancelamento',
      selected: true,
    },
  ];
  constructor(
    public user: UserClass,
    public cancellationReason: CancellationReasonClass,
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
    this.cancellationReason.show = this.cancellationReason.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.cancellationReason.filterActive(tab === this.tabs[0]);
    const data = this.cancellationReason.makeData(active);
    this.cancellationReason.makePagination(data);
  }

  edit(event) {
    const id = event.info[0];
    let call = this.cancellationReason.find(id);
    this.cancellationReason.data.forEach((element) => {
      element.forEach((e) => {
        if (e.info[0] === id) call = e;
      });
    });
    this.navigation.goToParam('cancellationReason-crud', call.info[0]);
  }

  async del(event) {
    await this.screen.presentLoading();
    const id = event.info[0];
    await this.cancellationReason.delete(id);
    this.cancellationReason.setClassAll().then(async (res) => {
      this.cancellationReason.makeSet(res);
      this.cancellationReason.makePagination();
      await this.screen.dismissLoading();
    });
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.cancellationReason.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.cancellationReason.show = this.pagination.makeData(searched);
    this.cancellationReason.makePagination();
  }

  add() {
    this.navigation.goTo('cancellationReason-crud');
  }
}
