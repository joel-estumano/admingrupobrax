import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetsCrudPage } from './budgets-crud.page';

describe('BudgetsCrudPage', () => {
  let component: BudgetsCrudPage;
  let fixture: ComponentFixture<BudgetsCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BudgetsCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
