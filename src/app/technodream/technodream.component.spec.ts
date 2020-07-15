import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnodreamComponent } from './technodream.component';

describe('TechnodreamComponent', () => {
  let component: TechnodreamComponent;
  let fixture: ComponentFixture<TechnodreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnodreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnodreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
