import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinanceCategoriesCrudPage } from './finance-categories-crud.page';

describe('FinanceCategoriesCrudPage', () => {
  let component: FinanceCategoriesCrudPage;
  let fixture: ComponentFixture<FinanceCategoriesCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinanceCategoriesCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
