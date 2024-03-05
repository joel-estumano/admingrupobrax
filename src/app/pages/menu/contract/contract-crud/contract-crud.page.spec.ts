import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractHomePage } from './contract-crud.page';

describe('ContractHomePage', () => {
  let component: ContractHomePage;
  let fixture: ComponentFixture<ContractHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContractHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
