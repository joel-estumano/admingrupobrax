import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockCrudPage } from './stock-crud.page';

describe('StockCrudPage', () => {
  let component: StockCrudPage;
  let fixture: ComponentFixture<StockCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StockCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
