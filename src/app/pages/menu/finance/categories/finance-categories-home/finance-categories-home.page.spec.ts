import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinanceCategoriesHomePage } from './finance-categories-home.page';

describe('FinanceCategoriesHomePage', () => {
  let component: FinanceCategoriesHomePage;
  let fixture: ComponentFixture<FinanceCategoriesHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinanceCategoriesHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
