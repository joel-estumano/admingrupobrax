import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageCore } from 'src/app/classes/core/page-core/page-core.component';
import { SaleClass } from 'src/app/classes/sale/sale';
import { UserClass } from 'src/app/classes/user/user';
import { MenuService } from 'src/app/services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-sales-crud',
  templateUrl: './sales-crud.page.html',
  styleUrls: ['./sales-crud.page.scss'],
})
export class SalesCrudPage extends PageCore {
  public call;
  public id;

  // Recebe os arquivos do cadastro do usuário
  public files: {
    doc_cpf?: any;
    doc_residence?: any;
    doc_company?: any;
  } = {};

  // Preenche os dados da aba de documentos
  public data: any = [
    {
      info: ['RG, CPF ou CNH', 'Pendente', '', 'actions'],
      actions: ['view'],
      index: 0,
      hasFile: false,
      which: 'doc_cpf',
    },
    {
      info: ['Comprovante de Residência', 'Pendente', '', 'actions'],
      actions: ['view'],
      index: 1,
      hasFile: false,
      which: 'doc_residence',
    },
    {
      info: ['Razão Social', 'Pendente', '', 'actions'],
      actions: ['view'],
      index: 2,
      hasFile: false,
      which: 'doc_company',
    },
  ];

  constructor(
    public sale: SaleClass,
    private route: ActivatedRoute,
    private user: UserClass,
    private navigation: NavigationService,
    private menu: MenuService
  ) {
    super();
    this.menu.items.forEach((e) => {
      e.selected = e.name == 'Vendas';
    });
    this.route.queryParams.subscribe(async (params: any) => {
      this.id = params.params;

      if (this.id) {
        // Preenche os dados do usuário e da chamada
        const find = this.sale.find(this.id);
        this.call = find ? find : await this.sale.getHttp(this.id);
        const find_client = this.user.find(this.call.client_id);
        const client = find_client
          ? find_client
          : await this.user.getHttp(this.call.client_id);

        const find_partner = this.user.find(this.call.user_id);
        const partner = find_partner
          ? find_partner
          : await this.user.getHttp(this.call.user_id);

        if (this.call.approved === 1 && this.call.approved_id) {
          const find_approver = this.user.find(this.call.approved_id);
          const approver = find_approver
            ? find_approver
            : await this.user.getHttp(this.call.approved_id);
          this.call.approver = approver;
        }

        this.call.partner = partner;
        this.call.client = client;
        console.log(this.call);
      }
    });
  }

  getDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  getTime(date) {
    return new Date(date).toLocaleTimeString('pt-BR');
  }

  // Configura os dados dos documentos
  override setData() {
    const tab = this.findSelectedTab(this.sale.tabs);
    this.sale.selectedTab = tab;
    console.log(this.sale.selectedTab);

    this.data.forEach((item) => {
      item.info[1] =
        this.call.client[item.which] && this.call.client[item.which].status
          ? this.call.client[item.which].status
          : 'Pendente';
      item.info[2] =
        this.call.client[item.which] && this.call.client[item.which]
          ? this.call.client[item.which].name
          : '';
      if (this.call.client[item.which] && this.call.client[item.which].url) {
        item.url = this.call.client[item.which].url;
        item.hasFile = true;
        this.files[item.which] = this.call.client[item.which];
      }
    });
  }

  back() {
    this.navigation.goTo('sales-home');
  }
}
