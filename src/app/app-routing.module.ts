import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/menu/home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/menu/users/users-home/users.module').then(
        (m) => m.UsersPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'users-crud',
    loadChildren: () =>
      import('./pages/menu/users/users-crud/users-crud.module').then(
        (m) => m.UsersCrudPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'terms-home',
    loadChildren: () =>
      import('./pages/menu/terms/terms-home/terms-home.module').then(
        (m) => m.TermsHomePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'contract-crud',
    loadChildren: () =>
      import('./pages/menu/contract/contract-crud/contract-crud.module').then(
        (m) => m.ContractCrudPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'privacy-home',
    loadChildren: () =>
      import('./pages/menu/privacy/privacy-home/privacy-home.module').then(
        (m) => m.PrivacyHomePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'contract-home',
    loadChildren: () =>
      import('./pages/menu/contract/contract-home/contract-home.module').then(
        (m) => m.ContractHomePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'payments-home',
    loadChildren: () =>
      import('./pages/menu/payments/payments-home/payments-home.module').then(
        (m) => m.PaymentsHomePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'payments-crud',
    loadChildren: () =>
      import('./pages/menu/payments/payments-crud/payments-crud.module').then(
        (m) => m.PaymentsCrudPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'budgets-home',
    loadChildren: () =>
      import('./pages/menu/budgets/budgets-home/budgets-home.module').then(
        (m) => m.BudgetsHomePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'budgets-crud',
    loadChildren: () =>
      import('./pages/menu/budgets/budgets-crud/budgets-crud.module').then(
        (m) => m.BudgetsCrudPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'commissions-type-home',
    loadChildren: () => import('./pages/menu/commissions/comissions-type-home/comissions-type-home.module').then(m => m.ComissionsTypeHomePageModule)
  },
  {
    path: 'commissions-type-crud',
    loadChildren: () => import('./pages/menu/commissions/comissions-type-crud/comissions-type-crud.module').then(m => m.ComissionsTypeCrudPageModule)
  },
  {
    path: 'sales-crud',
    loadChildren: () =>
      import('./pages/menu/sales/sales-crud/sales-crud.module').then(
        (m) => m.SalesCrudPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'sales-home',
    loadChildren: () =>
      import('./pages/menu/sales/sales-home/sales-home.module').then(
        (m) => m.SalesHomePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'bills-to-pay',
    loadChildren: () =>
      import('./pages/menu/finance/bills-to-pay/bills-to-pay.module').then(
        (m) => m.BillsToPayPageModule
      ),
  },
  {
    path: 'receivements',
    loadChildren: () =>
      import('./pages/menu/finance/receivements/receivements.module').then(
        (m) => m.ReceivementsPageModule
      ),
  },
  {
    path: 'movements',
    loadChildren: () =>
      import('./pages/menu/finance/movements/movements.module').then(
        (m) => m.MovementsPageModule
      ),
  },
  {
    path: 'cashier',
    loadChildren: () => import('./pages/menu/finance/cashier/cashier.module').then(m => m.CashierPageModule)
  },
  {
    path: 'sangria',
    loadChildren: () => import('./pages/menu/finance/sangria/sangria.module').then(m => m.SangriaPageModule)
  },
  {
    path: 'finance-categories-home',
    loadChildren: () =>
      import(
        './pages/menu/finance/categories/finance-categories-home/finance-categories-home.module'
      ).then((m) => m.FinanceCategoriesHomePageModule),
  },
  {
    path: 'finance-categories-crud',
    loadChildren: () =>
      import(
        './pages/menu/finance/categories/finance-categories-crud/finance-categories-crud.module'
      ).then((m) => m.FinanceCategoriesCrudPageModule),
  },
  {
    path: 'logistic-categories-home',
    loadChildren: () =>
      import(
        './pages/menu/logistic/categories/categories-home/categories-home.module'
      ).then((m) => m.CategoriesHomePageModule),
  },
  {
    path: 'logistic-categories-crud',
    loadChildren: () =>
      import(
        './pages/menu/logistic/categories/categories-crud/categories-crud.module'
      ).then((m) => m.CategoriesCrudPageModule),
  },
  {
    path: 'stock-home',
    loadChildren: () =>
      import('./pages/menu/logistic/stock/stock-home/stock-home.module').then(
        (m) => m.StockHomePageModule
      ),
  },
  {
    path: 'stock-crud',
    loadChildren: () =>
      import('./pages/menu/logistic/stock/stock-crud/stock-crud.module').then(
        (m) => m.StockCrudPageModule
      ),
  },
  {
    path: 'devolutions-home',
    loadChildren: () =>
      import(
        './pages/menu/logistic/devolutions-reason/devolutions-home/devolutions-home.module'
      ).then((m) => m.DevolutionsHomePageModule),
  },
  {
    path: 'devolutions-crud',
    loadChildren: () =>
      import(
        './pages/menu/logistic/devolutions-reason/devolutions-crud/devolutions-crud.module'
      ).then((m) => m.DevolutionsCrudPageModule),
  },
  {
    path: 'cancelled-home',
    loadChildren: () =>
      import(
        './pages/menu/logistic/cancelled/cancelled-home/cancelled-home.module'
      ).then((m) => m.CancelledHomePageModule),
  },
  {
    path: 'devolutions-made-home',
    loadChildren: () =>
      import(
        './pages/menu/logistic/devolutions-made-home/devolutions-made-home.module'
      ).then((m) => m.DevolutionsMadeHomePageModule),
  },
  {
    path: 'delivery-home',
    loadChildren: () =>
      import(
        './pages/menu/logistic/delivery/delivery-home/delivery-home.module'
      ).then((m) => m.DeliveryHomePageModule),
  },
  {
    path: 'delivery-crud',
    loadChildren: () =>
      import(
        './pages/menu/logistic/delivery/delivery-crud/delivery-crud.module'
      ).then((m) => m.DeliveryCrudPageModule),
  },
  {
    path: 'cancellationReason-home',
    loadChildren: () =>
      import(
        './pages/menu/logistic/cancelation-reason/cancellation-reason-home/cancellation-reason-home.module'
      ).then((m) => m.CancellationReasonHomePageModule),
  },
  {
    path: 'cancellationReason-crud',
    loadChildren: () =>
      import(
        './pages/menu/logistic/cancelation-reason/cancellation-reason-crud/cancellation-reason-crud.module'
      ).then((m) => m.CancellationReasonCrudPageModule),
  },
  {
    path: 'supportCategories-home',
    loadChildren: () =>
      import(
        './pages/menu/support/support-categories/support-categories-home/support-categories-home.module'
      ).then((m) => m.SupportCategoriesHomePageModule),
  },
  {
    path: 'supportCategories-crud',
    loadChildren: () =>
      import(
        './pages/menu/support/support-categories/support-categories-crud/support-categories-crud.module'
      ).then((m) => m.SupportCategoriesCrudPageModule),
  },
  {
    path: 'support-exclusions-home',
    loadChildren: () =>
      import(
        './pages/menu/support/support-exclusions/support-exclusions-home/support-exclusions-home.module'
      ).then((m) => m.SupportExclusionsHomePageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/menu/about/about.module').then(
        (m) => m.AboutModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
