import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryHomePage } from './delivery-home.page';

describe('DeliveryHomePage', () => {
  let component: DeliveryHomePage;
  let fixture: ComponentFixture<DeliveryHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeliveryHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
