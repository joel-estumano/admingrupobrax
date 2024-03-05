import { Injectable } from '@angular/core';
import { Core } from '../../core/core';
import { HelperGetterService } from 'src/app/services/helpers/helpers/helper-getter.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { OrderingService } from 'src/app/services/ordering/ordering.service';

@Injectable()
export class SangriaClass extends Core {
  pages: any = [];
  currentPage = 0;
  public data;
  public show;
  public headers = ['Número', 'Vencimento', 'Valor', 'Situação', 'Competência', 'Responsável', 'Perfil de Acesso', 'Modificado em'];
  override cachePath = 'Movements';
  override path = 'Movements';

  constructor(
    public override getter: HelperGetterService,
    private pagination: PaginationService,
    private ordering: OrderingService
  ) {
    super(getter);
    this.collection = this.getter.crud.collectionConstructor(this.path);
  }

  reset() {
    this.data = [];
    this.show = [];
  }

  makeSet(res) {
    this.fill(res);
    return this.makeData(res);
  }

  // makePagination(res?, setter = true, filterOption = 0, order?, orderType?) {
  //   this.data = res ? res : this.data;
  //   const pages = this.pagination.makeData(this.data);
  //   if (setter) this.data = pages;
  //   this.show = [];

  //   this.data.forEach((element) => {
  //     const a = element.filter((e) => {
  //       return e;
  //     });
  //     this.show.push(...a);
  //   });

  //   this.data = this.pagination.makeData(this.show);
  //   this.show = this.data;
  //   this.generateTabs();
  // }

  makePagination(res?, setter = true, order?, orderType?) {
    let data = res ? res : this.data;
    const orderBy = this.orderBy(data, order, orderType);
    const pages = this.pagination.makeData(orderBy);
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

  filterActive(bool: boolean) {
    return this.value.map((e) => {
      if (bool && !e.exclude) return e;
      else if (!bool && e.exclude === true) return e;
    });
  }

  makeData(data) {
    const result: any = [];
    data.forEach((e, i) => {
      result.push({
        info: [
          e.id,
          e.date,
          e.value,
          e.status,
          e.issue_date ||
          new Date(e.createdAt.seconds * 1000).toLocaleDateString('pt-BR'),
          e.responsible?.nome || e.responsible?.email || '',
          e.responsible?.levelName || '',
          e.createdAt ? new Date(e.createdAt.seconds * 1000).toLocaleString('pt-BR') : '',
        ],
        actions: [],
        index: i,
        extra: ['movements', e.destiny],
      });
    });
    this.data = result;
    this.show = result;
    return result;
  }

  private orderBy(data, order: 'desc' | 'asc' = 'desc', type?) {
    const index = this.getOrderIndex(type) || 0;
    return this.ordering.order(data, order, (n1, n2) => {
      return {
        s1: n1.info[index] ? n1.info[index] : '',
        s2: n2.info[index] ? n2.info[index] : '',
      };
    });
  }

  private getOrderIndex(type) {
    let index = 1;
    switch (type) {
      case 'Número':
        index = 0;
        break;
      case 'Vencimento':
        index = 1;
        break;
      case 'Valor':
        index = 2;
        break;
      case 'Situação':
        index = 3;
        break;
      case 'Competência':
        index = 4;
        break;
      case 'Responsável':
        index = 5;
        break;
      case 'Perfil de Acesso':
        index = 6;
        break;
      case 'Modificado em':
        index = 7;
        break;
      default:
        index = 1;
        break;
    }
    return index;
  }
}
