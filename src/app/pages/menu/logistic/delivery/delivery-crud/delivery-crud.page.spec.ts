import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryCrudPage } from './delivery-crud.page';

describe('DeliveryCrudPage', () => {
  let component: DeliveryCrudPage;
  let fixture: ComponentFixture<DeliveryCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeliveryCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
