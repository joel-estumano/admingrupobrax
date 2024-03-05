import { Component, OnDestroy } from '@angular/core';
import { BillsToPayClass } from 'src/app/classes/[finance]/billsToPay/billsToPay';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Component({
  selector: 'app-bills-to-pay',
  templateUrl: './bills-to-pay.page.html',
  styleUrls: ['./bills-to-pay.page.scss'],
})
export class BillsToPayPage extends PageCore implements OnDestroy {
  order = 'asc';
  public search = '';
  public class = '';
  public filterOption = 0;
  current_tab = 'Contas a Pagar';
  override tabs = this.billsToPay.tabs;
  constructor(
    public user: UserClass,
    public billsToPay: BillsToPayClass,
    private pagination: PaginationService,
    private menu: MenuService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Contas a Pagar';
    });
  }

  ngOnDestroy(): void {
    this.billsToPay.show = this.billsToPay.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.billsToPay.filterActive(tab === this.tabs[0]);
    const data = this.billsToPay.makeData(active);
    this.billsToPay.makePagination(data, true, this.filterOption);
  }

  override tabEvent(event = 0, tabName = '') {
    this.filterOption = event;

    // this.tabs.forEach((e, i) => {
    //   e.selected = e.name == tabName;
    //   if (e.selected) {
    //     this.setData();
    //   }
    // });

    const tab = this.findSelectedTab();

    if (this.filterOption >= 0 && tab.options) {
      tab.options.forEach((e, i) => {
        e.selected = i == this.filterOption;
      });
    }
    this.class = tab.class;
    if (this.search) this.searching();
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.billsToPay.data.forEach((element) => {
      const a = element.filter((e) => {
        console.log(e.info[0].toLowerCase(), this.search.toLowerCase());
        return (e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1);
      });
      searched.push(...a);
    });
    this.billsToPay.show = this.pagination.makeData(searched);
    this.billsToPay.makePagination();
  }

}