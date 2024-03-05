import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevolutionsHomePage } from './devolutions-home.page';

describe('DevolutionsHomePage', () => {
  let component: DevolutionsHomePage;
  let fixture: ComponentFixture<DevolutionsHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DevolutionsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
