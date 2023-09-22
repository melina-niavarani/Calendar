import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearViewCalenderComponent } from './year-view-calender.component';

describe('YearViewCalenderComponent', () => {
  let component: YearViewCalenderComponent;
  let fixture: ComponentFixture<YearViewCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearViewCalenderComponent]
    });
    fixture = TestBed.createComponent(YearViewCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
