import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovementsClass } from 'src/app/classes/[finance]/movements/movements';
import { SangriaClass } from 'src/app/classes/[finance]/movements/sangria';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { UserClass } from 'src/app/classes/user/user';
import { MasterService } from 'src/app/services/master/master.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Component({
  selector: 'app-sangria',
  templateUrl: './sangria.page.html',
  styleUrls: ['./sangria.page.scss'],
})
export class SangriaPage extends PageCore implements OnDestroy {
  search = '';
  override tabs = [
    {
      name: 'Sangria',
      selected: true,
    },
  ];
  constructor(
    public user: UserClass,
    public sangria: SangriaClass,
    private pagination: PaginationService,
    private menu: MenuService,
    private master: MasterService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Sangria';
    });
  }

  ngOnDestroy(): void {
    this.sangria.show = this.sangria.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.sangria.filterActive(tab === this.tabs[0]);
    const data = this.sangria.makeData(active);
    this.sangria.makePagination(data);
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.sangria.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.sangria.show = this.pagination.makeData(searched);
    this.sangria.makePagination();
  }
}
