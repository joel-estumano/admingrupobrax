import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevolutionsCrudPage } from './devolutions-crud.page';

describe('DevolutionsCrudPage', () => {
  let component: DevolutionsCrudPage;
  let fixture: ComponentFixture<DevolutionsCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DevolutionsCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
