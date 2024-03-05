import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentsCrudPage } from './payments-crud.page';

describe('PaymentsCrudPage', () => {
  let component: PaymentsCrudPage;
  let fixture: ComponentFixture<PaymentsCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaymentsCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
