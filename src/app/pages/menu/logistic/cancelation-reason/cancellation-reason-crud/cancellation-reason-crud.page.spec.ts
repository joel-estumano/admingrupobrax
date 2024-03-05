import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancellationReasonCrudPage } from './cancellation-reason-crud.page';

describe('CancellationReasonCrudPage', () => {
  let component: CancellationReasonCrudPage;
  let fixture: ComponentFixture<CancellationReasonCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CancellationReasonCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
