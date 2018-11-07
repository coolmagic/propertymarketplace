import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandregistryComponent } from './landregistry.component';

describe('LandregistryComponent', () => {
  let component: LandregistryComponent;
  let fixture: ComponentFixture<LandregistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandregistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
