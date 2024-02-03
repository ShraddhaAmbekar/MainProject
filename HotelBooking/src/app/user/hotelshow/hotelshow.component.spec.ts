import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelshowComponent } from './hotelshow.component';

describe('HotelshowComponent', () => {
  let component: HotelshowComponent;
  let fixture: ComponentFixture<HotelshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelshowComponent]
    });
    fixture = TestBed.createComponent(HotelshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
