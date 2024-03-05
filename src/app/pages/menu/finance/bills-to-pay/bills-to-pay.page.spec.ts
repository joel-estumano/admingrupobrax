import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillsToPayPage } from './bills-to-pay.page';

describe('BillsToPayPage', () => {
  let component: BillsToPayPage;
  let fixture: ComponentFixture<BillsToPayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillsToPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
