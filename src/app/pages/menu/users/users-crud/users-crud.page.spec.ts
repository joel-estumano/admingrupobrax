import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersCrudPage } from './users-crud.page';

describe('UsersCrudPage', () => {
  let component: UsersCrudPage;
  let fixture: ComponentFixture<UsersCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsersCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
