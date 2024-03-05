import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserClass } from '../classes/user/user';
import { ContractClass } from '../classes/contract/contract';
import { PrivacyClass } from '../classes/privacy/privacy';
import { TermClass } from '../classes/terms/terms';
import { PaymentClass } from '../classes/payments/payments';
import { SaleClass } from '../classes/sale/sale';
import { BudgetClass } from '../classes/budget/budget';
import { ProductClass } from '../classes/products/products';
import { CategoriesClass } from '../classes/categories/categories';
import { StocksClass } from '../classes/stock/stock';
import { DeliveryClass } from '../classes/delivery/delivery';
import { CancellationReasonClass } from '../classes/cancellationReason/cancellationReason';
import { SupportCategoriesClass } from '../classes/categories/supportCategories';
import { CancelledServicesClass } from '../classes/[logistic]/cancelledServices/cancelledServices';
import { DevolutionClass } from '../classes/devolutions/devolutions';
import { StockClass } from '../classes/[logistic]/stock/stock';
import { BillsToPayClass } from '../classes/[finance]/billsToPay/billsToPay';
import { GeneralClass } from '../classes/[finance]/general/general';
import { MovementsClass } from '../classes/[finance]/movements/movements';
import { ReceivementsClass } from '../classes/[finance]/receivements/receivements';
import { CashierClass } from '../classes/[finance]/cashier/cashier';
import { InvoicesClass } from '../classes/[finance]/invoices/invoices';
import { FinanceCategoriesClass } from '../classes/categories/finance-categories';
import { CommissionTypesClass } from '../classes/commissions/commission-types';
import { OpenOrCloseCashClass } from '../classes/[finance]/cashier/open-close-cash';
import { SangriaClass } from '../classes/[finance]/movements/sangria';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    UserClass,
    ContractClass,
    PrivacyClass,
    TermClass,
    PaymentClass,
    SaleClass,
    BudgetClass,
    CommissionTypesClass,
    ProductClass,
    CategoriesClass,
    FinanceCategoriesClass,
    StocksClass,
    DeliveryClass,
    StockClass,

    // Finance
    CashierClass,
    OpenOrCloseCashClass,
    BillsToPayClass,
    GeneralClass,
    MovementsClass,
    SangriaClass,
    InvoicesClass,
    ReceivementsClass,

    CancelledServicesClass,
    DevolutionClass,
    CancellationReasonClass,
    SupportCategoriesClass,
  ],
})
export class SharedModule {}
