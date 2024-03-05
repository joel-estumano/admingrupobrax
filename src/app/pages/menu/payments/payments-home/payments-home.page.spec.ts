import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentsHomePage } from './payments-home.page';

describe('PaymentsHomePage', () => {
  let component: PaymentsHomePage;
  let fixture: ComponentFixture<PaymentsHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaymentsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
