import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComissionsTypeCrudPage } from './comissions-type-crud.page';

describe('ComissionsTypeCrudPage', () => {
  let component: ComissionsTypeCrudPage;
  let fixture: ComponentFixture<ComissionsTypeCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComissionsTypeCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
