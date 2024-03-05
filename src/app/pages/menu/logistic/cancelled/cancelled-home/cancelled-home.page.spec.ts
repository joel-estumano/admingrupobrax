import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelledHomePage } from './cancelled-home.page';

describe('CancelledHomePage', () => {
  let component: CancelledHomePage;
  let fixture: ComponentFixture<CancelledHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CancelledHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
