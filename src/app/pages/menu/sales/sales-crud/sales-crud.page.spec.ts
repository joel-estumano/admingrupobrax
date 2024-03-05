import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesCrudPage } from './sales-crud.page';

describe('SalesCrudPage', () => {
  let component: SalesCrudPage;
  let fixture: ComponentFixture<SalesCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SalesCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
