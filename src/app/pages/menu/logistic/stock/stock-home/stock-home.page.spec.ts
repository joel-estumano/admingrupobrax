import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockHomePage } from './stock-home.page';

describe('StockHomePage', () => {
  let component: StockHomePage;
  let fixture: ComponentFixture<StockHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StockHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
