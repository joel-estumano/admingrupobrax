import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesHomePage } from './sales-home.page';

describe('SalesHomePage', () => {
  let component: SalesHomePage;
  let fixture: ComponentFixture<SalesHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SalesHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
