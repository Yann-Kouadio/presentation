import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirCubeComponent } from './air-cube.component';

describe('AirCubeComponent', () => {
  let component: AirCubeComponent;
  let fixture: ComponentFixture<AirCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
