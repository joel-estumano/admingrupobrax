import { DeliveryClass } from './../../classes/delivery/delivery';
import { Injectable } from '@angular/core';
import { BudgetClass } from 'src/app/classes/budget/budget';
import { CommissionTypesClass } from 'src/app/classes/commissions/commission-types';
import { ContractClass } from 'src/app/classes/contract/contract';
import { PaymentClass } from 'src/app/classes/payments/payments';
import { PrivacyClass } from 'src/app/classes/privacy/privacy';
import { ProductClass } from 'src/app/classes/products/products';
import { SaleClass } from 'src/app/classes/sale/sale';
import { TermClass } from 'src/app/classes/terms/terms';
import { UserClass } from 'src/app/classes/user/user';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../firebase/auth/auth.service';
import { CategoriesClass } from 'src/app/classes/categories/categories';
import { StocksClass } from 'src/app/classes/stock/stock';
import { CancellationReasonClass } from 'src/app/classes/cancellationReason/cancellationReason';
import { SupportCategoriesClass } from 'src/app/classes/categories/supportCategories';
import { DevolutionClass } from 'src/app/classes/devolutions/devolutions';
import { BillsToPayClass } from 'src/app/classes/[finance]/billsToPay/billsToPay';
import { GeneralClass } from 'src/app/classes/[finance]/general/general';
import { CashierClass } from 'src/app/classes/[finance]/cashier/cashier';
import { InvoicesClass } from 'src/app/classes/[finance]/invoices/invoices';
import { MovementsClass } from 'src/app/classes/[finance]/movements/movements';
import { ReceivementsClass } from 'src/app/classes/[finance]/receivements/receivements';
import { FinanceCategoriesClass } from 'src/app/classes/categories/finance-categories';
import { OpenOrCloseCashClass } from 'src/app/classes/[finance]/cashier/open-close-cash';
import { FinanceManagerService } from '../helpers/managers/finance-manager.service';
import { SangriaClass } from 'src/app/classes/[finance]/movements/sangria';
import { LogisticManagerService } from '../helpers/managers/logistic-manager.service';
import { CancelledServicesClass } from 'src/app/classes/[logistic]/cancelledServices/cancelledServices';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(
    private userClass: UserClass,
    private contract: ContractClass,
    private term: TermClass,
    private privacy: PrivacyClass,
    private payments: PaymentClass,
    private saleClass: SaleClass,
    private budgetClass: BudgetClass,
    private commissionTypesClass: CommissionTypesClass,
    private product: ProductClass,
    private auth: AuthService,
    private categoriesClass: CategoriesClass,
    private stockClass: StocksClass,
    private generalClass: GeneralClass,
    private cashierClass: CashierClass,
    private openOrCloseCashClass: OpenOrCloseCashClass,
    private invoicesClass: InvoicesClass,
    private movementsClass: MovementsClass,
    private sangriaClass: SangriaClass,
    private receivementsClass: ReceivementsClass,
    private billsToPayClass: BillsToPayClass,
    private deliveryClass: DeliveryClass,
    private devolutionClass: DevolutionClass,
    private cancellationReason: CancellationReasonClass,
    // private cancelledServices: CancelledServicesClass,
    private financeCategoriesClass: FinanceCategoriesClass,
    private supportCategories: SupportCategoriesClass,

    private logisticManager: LogisticManagerService,
    private financeManager: FinanceManagerService,
  ) { }

  async set(userId) {
    this.userClass.setClassAll<User>(true, false, 'all_users').then((res) => {
      this.setAll(res, userId);
      this.userClass.setLevels(res);
    });
    this.contract.setClassAll().then((res: any) => {
      if (res.length > 0) this.contract.text = res[0].text;
    });
    this.term.setClassAll().then((res: any) => {
      if (res.length > 0) this.term.text = res[0].text;
    });
    this.privacy.setClassAll().then((res: any) => {
      if (res.length > 0) this.privacy.text = res[0].text;
    });
    this.payments.setClassAll().then((res: any) => {
      if (res.length > 0) this.payments.value = res;
    });
    this.saleClass.setClassAll().then((res: any) => {
      if (res.length > 0) this.saleClass.value = res;
      const active = this.saleClass.filterActive(true);
      this.saleClass.makeSet(active);
      this.saleClass.makePagination();
    });
    this.budgetClass.setClassAll().then((res: any) => {
      if (res.length > 0) this.budgetClass.value = res;
      const active = this.budgetClass.filterActive(true);
      this.budgetClass.makeSet(active);
      this.budgetClass.makePagination();
    });
    this.commissionTypesClass.setClassAll().then((res) => {
      this.commissionTypesClass.makeSet(res);
      this.commissionTypesClass.makePagination();
    });
    this.product.setClassAll().then((res) => {
      this.product.makeSet(res);
    });
    this.categoriesClass.setClassAll().then((res) => {
      this.categoriesClass.makeSet(res);
      this.categoriesClass.makePagination();
    });
    this.generalClass.setClassAll().then((res) => {
      this.generalClass.makeSet(res);
      this.generalClass.makePagination();
    });
    this.receivementsClass.setClassAll().then((res) => {
      this.receivementsClass.makeSet(res);
      this.receivementsClass.makePagination();
    });
    this.stockClass.setClassAll().then((res) => {
      this.stockClass.makeSet(res);
      this.stockClass.makePagination();
    });
    this.deliveryClass.setClassAll().then((res) => {
      this.deliveryClass.makeSet(res);
      this.deliveryClass.makePagination();
    });
    this.devolutionClass.setClassAll().then((res) => {
      this.devolutionClass.makeSet(res);
      this.devolutionClass.makePagination();
    });
    this.cancellationReason.setClassAll().then((res) => {
      this.cancellationReason.makeSet(res);
      this.cancellationReason.makePagination();
    });
    this.financeCategoriesClass.setClassAll().then((res) => {
      this.financeCategoriesClass.makeSet(res);
      this.financeCategoriesClass.makePagination();
    });
    this.supportCategories.setClassAll().then((res) => {
      this.supportCategories.makeSet(res);
      this.supportCategories.makePagination();
    });

    this.setFinance();

    this.cashierClass.setClassAll().then((res) => {
      this.cashierClass.makeSet(res);
      this.cashierClass.makePagination();
    });
    this.openOrCloseCashClass.setClassAll().then((res) => {
      this.openOrCloseCashClass.makeSet(res);
      this.openOrCloseCashClass.makePagination();
    });
    this.billsToPayClass.setClassAll().then((res) => {
      this.billsToPayClass.makeSet(res);
      this.billsToPayClass.makePagination();
    });
    this.movementsClass.setClassAll().then((res) => {
      this.movementsClass.makeSet(res);
      this.movementsClass.makePagination();
    });
    this.sangriaClass.setClassAll().then((res) => {
      this.sangriaClass.makeSet(res);
      this.sangriaClass.makePagination();
    });
    this.invoicesClass.setClassAll().then((res) => {
      this.invoicesClass.makeSet(res);
      this.invoicesClass.makePagination();
    });

    this.setLogistic();
    // this.cancelledServices.setClassAll().then((res) => {
    //   this.cancelledServices.makeSet(res);
    //   this.cancelledServices.makePagination();
    // });
  }

  async setFinance() {
    this.financeManager.reset();
    await this.generalClass.setClassAll().then((res) => {
      const data = this.generalClass.makeSet(res);
      this.financeManager.data = data;
      this.financeManager.show = data;
      this.financeManager.makePagination(this.financeManager.data, true);
      this.financeManager.tabsFilter(
        this.financeManager.tabs[0],
        this.financeManager.tabs
      );
      this.financeManager.makePagination(this.financeManager.show);
    });
  }

  async setLogistic() {
    this.logisticManager.reset();
    await this.stockClass.setClassAll().then((res) => {
      const data = this.stockClass.makeSet(res);
      this.logisticManager.add(data);
      this.logisticManager.makePagination(this.logisticManager.data, true);
      this.logisticManager.tabsFilter(
        this.logisticManager.tabs[0],
        this.logisticManager.tabs
      );
      this.logisticManager.makePagination(this.logisticManager.show);
    });
  }

  public setAll(res, userId) {
    this.userClass.allUsers = res;
    this.userClass.fill(res);
    this.setUser(userId);
  }

  private setUser(userId) {
    const user = this.userClass.find(userId);
    this.userClass.value = user;
    this.userClass.setCache(user);
    if (this.userClass.value.level !== '7') {
      this.auth.logout();
    }
  }
}
