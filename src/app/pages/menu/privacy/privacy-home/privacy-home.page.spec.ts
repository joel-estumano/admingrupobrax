import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacyHomePage } from './privacy-home.page';

describe('PrivacyHomePage', () => {
  let component: PrivacyHomePage;
  let fixture: ComponentFixture<PrivacyHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrivacyHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
