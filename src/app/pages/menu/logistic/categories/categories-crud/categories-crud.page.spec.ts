import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesCrudPage } from './categories-crud.page';

describe('CategoriesCrudPage', () => {
  let component: CategoriesCrudPage;
  let fixture: ComponentFixture<CategoriesCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriesCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
