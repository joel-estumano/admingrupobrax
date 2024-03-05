import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportCategoriesHomePage } from './support-categories-home.page';

describe('SupportCategoriesHomePage', () => {
  let component: SupportCategoriesHomePage;
  let fixture: ComponentFixture<SupportCategoriesHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportCategoriesHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
