import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportCategoriesCrudPage } from './support-categories-crud.page';

describe('SupportCategoriesCrudPage', () => {
  let component: SupportCategoriesCrudPage;
  let fixture: ComponentFixture<SupportCategoriesCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportCategoriesCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
