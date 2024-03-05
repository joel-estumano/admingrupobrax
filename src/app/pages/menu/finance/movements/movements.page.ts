import { Component, OnDestroy } from '@angular/core';
import { MovementsClass } from 'src/app/classes/[finance]/movements/movements';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.page.html',
  styleUrls: ['./movements.page.scss'],
})
export class MovementsPage extends PageCore implements OnDestroy {
  search = '';
  class = '';
  total = '0,00';
  filterOption = 0;
  current_tab = 'Movimentações';
  override tabs = this.movements.tabs;
  constructor(
    public user: UserClass,
    public movements: MovementsClass,
    private pagination: PaginationService,
    private menu: MenuService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Orçamentos';
    });
  }

  ngOnDestroy(): void {
    this.movements.show = this.movements.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.movements.filterActive(tab === this.tabs[0]);
    const data = this.movements.makeData(active);
    this.movements.makePagination(data, true, this.filterOption);
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
    const items = this.movements.show;

    let total = 0;

    items.forEach((item) => {
      if (item.info && item.info.length > 2) {
        const floatValue = parseFloat(item.info[2].replace(',', '.')); // Replace commas with dots and then convert to float
        if (!isNaN(floatValue)) {
          total += floatValue;
        }
      }
    });

    this.total = total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    if (this.search) this.searching();
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.movements.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.movements.show = this.pagination.makeData(searched);
    this.movements.makePagination();
  }
}
