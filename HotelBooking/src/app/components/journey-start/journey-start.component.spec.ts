import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyStartComponent } from './journey-start.component';

describe('JourneyStartComponent', () => {
  let component: JourneyStartComponent;
  let fixture: ComponentFixture<JourneyStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyStartComponent]
    });
    fixture = TestBed.createComponent(JourneyStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
