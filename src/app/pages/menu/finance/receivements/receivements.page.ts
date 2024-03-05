import { Component, OnDestroy } from '@angular/core';
import { ReceivementsClass } from 'src/app/classes/[finance]/receivements/receivements';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Component({
  selector: 'app-receivements',
  templateUrl: './receivements.page.html',
  styleUrls: ['./receivements.page.scss'],
})
export class ReceivementsPage extends PageCore implements OnDestroy {
  search = '';
  override tabs = [
    {
      name: 'A Receber',
      selected: true,
    },
  ];
  constructor(
    public user: UserClass,
    public receivements: ReceivementsClass,
    private pagination: PaginationService,
    private menu: MenuService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'A receber';
    });
  }

  ngOnDestroy(): void {
    this.receivements.show = this.receivements.data;
  }

  override setData(): void {
    const tab = this.findSelectedTab();
    const active = this.receivements.filterActive(tab === this.tabs[0]);
    const data = this.receivements.makeData(active);
    this.receivements.makePagination(data);
  }

  onFilterChoose($event: any) {
    let novoArray = [].concat(...this.receivements.show);

    console.log(novoArray)
    if ($event.type === 0) {
      novoArray = novoArray.filter((e: any) => {
        const dataParts = e.info[4].split('/');
        const dataInfo = new Date(`${dataParts[2]}-${dataParts[1]}-${dataParts[0]}`);
        const dataHoje = new Date();
        const diffEmMilissegundos = dataHoje.getTime() - dataInfo.getTime();
        const diffEmDias = diffEmMilissegundos / (1000 * 60 * 60 * 24);
        return diffEmDias <= 30;
      });
      this.receivements.show = this.pagination.makeData(novoArray);
      this.receivements.makePagination(novoArray, true);
    }
    // else {
    //   const teste = novoArray.filter((e) => { return e.info[3] === 'Venda' });
    // }
  }

  searching(clear = false) {
    if (clear) this.search = '';
    const searched: any = [];
    this.receivements.data.forEach((element) => {
      const a = element.filter((e) => {
        return (
          e.info[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          e.info[1].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      searched.push(...a);
    });
    this.receivements.show = this.pagination.makeData(searched);
    this.receivements.makePagination();
  }
}
