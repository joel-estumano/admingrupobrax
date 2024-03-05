import { Component, OnDestroy } from '@angular/core';
import { CancelledServicesClass } from 'src/app/classes/[logistic]/cancelledServices/cancelledServices';
import { StockClass } from 'src/app/classes/[logistic]/stock/stock';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { UserClass } from 'src/app/classes/user/user';
import { LogisticManagerService } from 'src/app/services/helpers/managers/logistic-manager.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Component({
  selector: 'app-cancelled-home',
  templateUrl: './cancelled-home.page.html',
  styleUrls: ['./cancelled-home.page.scss'],
})
export class CancelledHomePage extends PageCore implements OnDestroy {
  order = 'asc';
  lastOrder = '';
  public search = '';
  public class = 'stock';
  public data = [];
  override tabs = [
    {
      name: 'Serviços Cancelados',
      selected: true,
    },
  ];
  constructor(
    public logisticManager: LogisticManagerService,
    public stock: StockClass,
    public pagination: PaginationService,
    public user: UserClass,
    private menu: MenuService,
  ) {
    super();
  }

  ionViewWillEnter() {
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Logística';
    });

    this.loadTable();
  }

  ngOnDestroy(): void {
    this.logisticManager.show = this.logisticManager.data;
  }

  async loadTable() {
    await this.stock.setClassAll().then((res) => {
      const data = this.stock.makeSet(res);
      this.logisticManager.reset();
      this.logisticManager.add(data);
      this.logisticManager.makePagination(this.logisticManager.data, true);
      this.logisticManager.tabsFilter(
        this.logisticManager.tabs[0],
        this.logisticManager.tabs
      );
      this.logisticManager.makePagination(this.logisticManager.show);
      this.data = this.logisticManager.show;
    });
  }


}
