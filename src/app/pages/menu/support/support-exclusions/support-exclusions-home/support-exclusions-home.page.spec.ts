import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportExclusionsHomePage } from './support-exclusions-home.page';

describe('SupportExclusionsHomePage', () => {
  let component: SupportExclusionsHomePage;
  let fixture: ComponentFixture<SupportExclusionsHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportExclusionsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
