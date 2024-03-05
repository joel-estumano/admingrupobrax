import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComissionsTypeHomePage } from './comissions-type-home.page';

describe('ComissionsTypeHomePage', () => {
  let component: ComissionsTypeHomePage;
  let fixture: ComponentFixture<ComissionsTypeHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComissionsTypeHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
