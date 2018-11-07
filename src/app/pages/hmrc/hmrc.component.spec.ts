import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmrcComponent } from './hmrc.component';

describe('HmrcComponent', () => {
  let component: HmrcComponent;
  let fixture: ComponentFixture<HmrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
