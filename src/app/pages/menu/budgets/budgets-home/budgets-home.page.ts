import { Component, OnDestroy } from '@angular/core';
import { BudgetClass } from 'src/app/classes/budget/budget';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Component({
  selector: 'app-budgets-home',
  templateUrl: './budgets-home.page.html',
  styleUrls: ['./budgets-home.page.scss'],
})
export class BudgetsHomePage extends PageCore implements OnDestroy {
  search = '';
  override tabs = [
    {
      name: 'Orçamentos',
      selected: true,
    },
    {
      name: 'Exclusões',
    },
  ];
  constructor(
    public user: UserClass,
    public budgets: BudgetClass,
    private pagination: PaginationService,
    private menu: MenuService,
    private navigation: NavigationService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Orçamentos';
    });
  }

  ngOnDestroy(): void {
    this.budgets.show = this.budgets.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.budgets.filterActive(tab === this.tabs[0]);
    const data = this.budgets.makeData(active);
    this.budgets.makePagination(data);
  }

  onFilterChoose($event: any) {
    let novoArray = [].concat(...this.budgets.show);

    if ($event.type === 0) {
      novoArray = novoArray.filter((e: any) => {
        const dataParts = e.info[4].split('/');
        const dataInfo = new Date(`${dataParts[2]}-${dataParts[1]}-${dataParts[0]}`);
        const dataHoje = new Date();
        const diffEmMilissegundos = dataHoje.getTime() - dataInfo.getTime();
        const diffEmDias = diffEmMilissegundos / (1000 * 60 * 60 * 24);
        return diffEmDias <= 30;
      });
      console.log(novoArray);
      this.budgets.show = this.pagination.makeData(novoArray);
      this.budgets.makePagination(novoArray, true);
    }
    // else {
    //   const teste = novoArray.filter((e) => { return e.info[3] === 'Venda' });
    // }
  }
  
  edit(event) {
    const id = event.info[0];
    let call = this.budgets.find(id);
    this.budgets.data.forEach((element) => {
      element.forEach((e) => {
        if (e.info[0] === id) call = e;
      });
    });
    this.navigation.goToParam('budgets-crud', call.info[0]);
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.budgets.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.budgets.show = this.pagination.makeData(searched);
    this.budgets.makePagination();
  }
}
