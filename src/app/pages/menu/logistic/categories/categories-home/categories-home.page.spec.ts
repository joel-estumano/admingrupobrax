import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesHomePage } from './categories-home.page';

describe('CategoriesHomePage', () => {
  let component: CategoriesHomePage;
  let fixture: ComponentFixture<CategoriesHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriesHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
