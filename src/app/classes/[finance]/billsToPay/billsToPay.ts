import { Injectable } from '@angular/core';
import { Core } from '../../core/core';
import { HelperGetterService } from 'src/app/services/helpers/helpers/helper-getter.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Injectable()
export class BillsToPayClass extends Core {
  pages: any = [];
  currentPage = 0;
  public data;
  public show: any;
  public headers = ['Fornecedor', 'Venc. Original', 'Vencimento', 'Valor R$', 'Data de emissão', 'N° documento', 'Competência', 'Responsável', 'Perfil', 'Horário da Baixa'];
  public phone_headers = ['Cliente', 'N° Linha', 'Venc. Original', 'Vencimento', 'Valor R$', 'Data de emissão', 'N° conta', 'Competência', 'Responsável', 'Perfil', 'Horário da Baixa'];
  override cachePath = 'BillsToPay';
  override path = 'BillsToPay';
  tabs = [
    {
      name: 'Contas a pagar',
      class: 'billsToPay',
      selected: true,
      options: [
        {
          name: 'Administrativo',
          selected: true,
        },
        {
          name: 'Telefonia',
        },
      ],
    }
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

    this.data.forEach((element) => {
      const a = element.filter((e) => {
        if (!activeOption) return e;
        if (activeOption.name == 'Administrativo' && e.extra[1] == 'ADMINISTRATIVO') return e;
        if (activeOption.name == 'Telefonia' && e.extra[1] == 'TELEFONIA') return e;
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
        info:
          e.type == 'ADMINISTRATIVO'
            ? [
              e.supplier?.nome || e.supplier?.email || '',
              e.original_due_date ||
              new Date(e.createdAt.seconds * 1000).toLocaleDateString('pt-BR'),
              e.due_date ||
              new Date(e.createdAt.seconds * 1000).toLocaleDateString('pt-BR'),
              e.value,
              e.issue_date ||
              new Date(e.createdAt.seconds * 1000).toLocaleDateString('pt-BR'),
              e.document,
              e.period,
              e.responsible?.nome || '',
              e.responsible?.levelName || '',
              new Date(e.createdAt.seconds * 1000).toLocaleString('pt-BR'),
            ]
            : [
              e.client.nome,
              e.line,
              e.original_due_date ||
              new Date(e.createdAt.seconds * 1000).toLocaleDateString('pt-BR'),
              e.due_date ||
              new Date(e.createdAt.seconds * 1000).toLocaleDateString('pt-BR'),
              e.value,
              e.issue_date ||
              new Date(e.createdAt.seconds * 1000).toLocaleDateString('pt-BR'),
              e.account,
              e.period,
              e.responsible?.nome || '',
              e.responsible?.levelName || '',
              new Date(e.createdAt.seconds * 1000).toLocaleString('pt-BR'),
            ],
        actions: [],
        index: i,
        extra: ['billsToPay', e.type],
      });
    });
    this.data = result;
    this.show = result;
    return result;
  }
}
