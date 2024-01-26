import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSuccessComponent } from './user-success.component';

describe('UserSuccessComponent', () => {
  let component: UserSuccessComponent;
  let fixture: ComponentFixture<UserSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSuccessComponent]
    });
    fixture = TestBed.createComponent(UserSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
