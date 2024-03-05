import { Injectable } from '@angular/core';
import { Core } from '../../core/core';
import { HelperGetterService } from 'src/app/services/helpers/helpers/helper-getter.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Injectable()
export class MovementsClass extends Core {
  pages: any = [];
  currentPage = 0;
  public data;
  public show;
  public headers = ['Número', 'Vencimento', 'Valor', 'Situação', 'Competência', 'Responsável', 'Perfil de Acesso', 'Modificado em'];
  override cachePath = 'Movements';
  override path = 'Movements';
  tabs = [
    {
      name: 'Movimentações',
      class: 'movements',
      selected: true,
      options: [
        {
          name: 'Cx loja',
          selected: true,
        },
        {
          name: 'Cx financeiro',
        },
        {
          name: 'Cofre',
        },
        {
          name: 'Bancos',
        },
        {
          name: 'Cheques',
        },
      ],
    },
  ];
  constructor(
    public override getter: HelperGetterService,
    private pagination: PaginationService
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

  makePagination(res?, setter = true, filterOption = 0) {
    this.data = res ? res : this.data;
    const pages = this.pagination.makeData(this.data);
    if (setter) this.data = pages;
    this.show = [];

    if (filterOption >= 0) {
      var activeOption = this.tabs[0].options[filterOption];
    }

    // TODO: ARRUMAR ISSO
    this.data.forEach((element) => {
      const a = element.filter((e) => {
        if (!activeOption) return e;
        if (activeOption.name == 'Cx loja' && e.extra[1] == 'CX LOJA') return e;
        if (activeOption.name == 'Cx financeiro' && e.extra[1] == 'CX FINANCEIRO') return e;
        if (activeOption.name == 'Cofre' && e.extra[1] == 'COFRE') return e;
        if (activeOption.name == 'Bancos' && e.extra[1] == 'BANCOS') return e;
        if (activeOption.name == 'Cheques' && e.extra[1] == 'CHEQUES') return e;
      });
      this.show.push(...a);
    });

    this.data = this.pagination.makeData(this.show);
    this.show = this.data;
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
}
