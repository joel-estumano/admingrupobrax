import { Component, OnDestroy, OnInit } from '@angular/core';
import { OpenOrCloseCashClass } from 'src/app/classes/[finance]/cashier/open-close-cash';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.page.html',
  styleUrls: ['./cashier.page.scss'],
})
export class CashierPage extends PageCore implements OnDestroy {
  search = '';
  override tabs = [
    {
      name: 'Abertura/Fechamento de Caixa',
      selected: true,
    },
  ];
  constructor(
    public user: UserClass,
    public cashier: OpenOrCloseCashClass,
    private pagination: PaginationService,
    private menu: MenuService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Abertura/Fechamento de Caixa';
    });
  }

  ngOnDestroy(): void {
    this.cashier.show = this.cashier.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.cashier.filterActive(tab === this.tabs[0]);
    const data = this.cashier.makeData(active);
    this.cashier.makePagination(data);
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.cashier.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.cashier.show = this.pagination.makeData(searched);
    this.cashier.makePagination();
  }
}
