import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavigationService } from '../navigation/navigation.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public items: Array<{
    name: string;
    icon: string;
    path?: string;
    url?: string;
    permission?: Array<string>;
    selected: boolean;
    disabled?: boolean;
    child?: any[];
  }> = [
    {
      name: 'Home',
      icon: 'home',
      path: 'home',
      selected: true,
    },
    {
      name: 'Usuários',
      icon: 'user',
      path: 'users',
      selected: false,
    },
    {
      name: 'Atendimento',
      icon: 'chatbubble-ellipses',
      selected: false,
      child: [
        {
          name: 'Orçamentos',
          icon: 'home',
          path: 'budgets-home',
          selected: false,
        },
        {
          name: 'Vendas',
          icon: 'home',
          path: 'sales-home',
          selected: false,
        },
      ],
    },
    {
      name: 'Financeiro',
      icon: 'chart-line',
      selected: false,
      child: [
        {
          name: 'Contas a Pagar',
          icon: 'list-circle',
          path: 'bills-to-pay',
          selected: false,
        },
        {
          name: 'Contas a Receber',
          icon: 'pie-chart',
          path: 'receivements',
          selected: false,
        },
        {
          name: 'Movimentações',
          icon: 'layers',
          path: 'movements',
          selected: false,
        },
        {
          name: 'Abertura/Fechamento de caixa',
          icon: 'receipt',
          path: 'cashier',
          selected: false,
        },
        {
          name: 'Sangria',
          icon: 'cash',
          path: 'sangria',
          selected: false,
        },
        {
          name: 'Categorias',
          icon: 'list',
          path: 'finance-categories-home',
          selected: false,
        },
      ],
    },
    {
      name: 'Logística',
      icon: 'extension-puzzle',
      selected: false,
      child: [
        {
          name: 'Categorias',
          icon: 'list',
          path: 'logistic-categories-home',
          selected: false,
        },
        {
          name: 'Operadoras',
          icon: 'phone-portrait',
          path: 'stock-home',
          selected: false,
        },
        {
          name: 'Formas de Envio',
          icon: 'cube',
          path: 'delivery-home',
          selected: false,
        },
        {
          name: 'Motivos de Devoluções',
          icon: 'reader',
          path: 'devolutions-home',
          selected: false,
        },
        {
          name: 'Motivos de Cancelamento',
          icon: 'ban',
          path: 'cancellationReason-home',
          selected: false,
        },
        {
          name: 'Serviços Cancelados',
          icon: 'ban',
          path: 'cancelled-home',
          selected: false,
        },
        {
          name: 'Devoluções Realizadas',
          icon: 'arrow-undo',
          path: 'devolutions-made-home',
          selected: false,
        },
      ],
    },
    {
      name: 'Comissões e Campanhas',
      icon: 'book',
      selected: false,
      child: [
        {
          name: 'Tipo',
          icon: 'bookmark',
          path: 'commissions-type-home',
          selected: false,
        },
      ],
    },
    {
      name: 'Suporte',
      icon: 'help-circle',
      selected: false,
      child: [
        {
          name: 'Categorias',
          icon: 'help-circle',
          path: 'supportCategories-home',
          selected: false,
        },
      ],
    },
    {
      name: 'Contrato',
      icon: 'document-text',
      path: 'contract-home',
      selected: false,
    },
    {
      name: 'Pagamentos',
      icon: 'cash',
      path: 'payments-home',
      selected: false,
    },
    {
      name: 'Termos de Uso',
      icon: 'document-lock',
      path: 'terms-home',
      selected: false,
    },
    {
      name: 'Política de Privacidade',
      icon: 'document-lock',
      path: 'privacy-home',
      selected: false,
    },
    {
      name: 'Sobre o Grupo Brax',
      icon: 'document-lock',
      path: 'about',
      selected: false,
    },
  ];
  constructor(
    private menu: MenuController,
    private navigation: NavigationService
  ) {}

  menuStatus() {
    return this.menu.isOpen;
  }

  menuControl(bool: boolean) {
    this.menu.enable(bool);
  }

  closeMenu() {
    this.menu.close();
  }

  goTo(item) {
    if (item.path) this.navigation.goTo(item.path);

    this.items.forEach((item) => {
      if (item.child && item.child.length > 0) {
        item.child.forEach((child) => {
          child.selected = false;
        });
      }
      item.selected = false;
    });

    item.selected = true;
  }
}
