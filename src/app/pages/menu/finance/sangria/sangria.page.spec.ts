import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SangriaPage } from './sangria.page';

describe('SangriaPage', () => {
  let component: SangriaPage;
  let fixture: ComponentFixture<SangriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SangriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
