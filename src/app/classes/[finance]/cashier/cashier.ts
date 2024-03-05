import { Injectable } from '@angular/core';
import { Core } from '../../core/core';
import { HelperGetterService } from 'src/app/services/helpers/helpers/helper-getter.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Injectable()
export class CashierClass extends Core {
  pages: any = [];
  currentPage = 0;
  public data;
  public show;
  public headers = ['Número', 'Vencimento', 'Valor', 'Situação'];
  override cachePath = 'Cashier';
  override path = 'Cashier';
  constructor(
    public override getter: HelperGetterService,
    private pagination: PaginationService
  ) {
    super(getter);
    this.collection = this.getter.crud.collectionConstructor(this.path);
  }

  makeSet(res) {
    this.fill(res);
    return this.makeData(res);
  }

  makePagination(res?, setter = true) {
    const pages = this.pagination.makeData(res ? res : this.data);
    if (setter) this.data = pages;
    this.show = pages;
    this.generateTabs();
  }

  changePage(event) {
    this.currentPage = event;
    this.generateTabs();
  }

  generateTabs() {
    this.pages = this.pagination.generateTabs(
      this.currentPage + 1,
      this.show.length
    );
    if (this.pages.length == 0) this.pages.push(1);
  }

  makeData(data) {
    const result: any = [];
    data.forEach((e, i) => {
      result.push({
        info: [
          e.id,
          e.due_date ||
            new Date(e.createdAt.seconds * 1000).toLocaleDateString('pt-BR'),
          e.value,
          e.status,
        ],
        actions: [],
        index: i,
        extra: [
          'cashier',
          new Date(e.createdAt.seconds * 1000).toLocaleDateString('pt-BR'),
        ],
      });
    });
    this.data = result;
    this.show = result;
    return result;
  }
}
