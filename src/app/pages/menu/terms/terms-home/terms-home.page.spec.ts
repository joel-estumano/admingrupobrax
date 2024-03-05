import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermsHomePage } from './terms-home.page';

describe('TermsHomePage', () => {
  let component: TermsHomePage;
  let fixture: ComponentFixture<TermsHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TermsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
