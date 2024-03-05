import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancellationReasonHomePage } from './cancellation-reason-home.page';

describe('CancellationReasonHomePage', () => {
  let component: CancellationReasonHomePage;
  let fixture: ComponentFixture<CancellationReasonHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CancellationReasonHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
