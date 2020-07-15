import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditAgricoleComponent } from './credit-agricole.component';

describe('CreditAgricoleComponent', () => {
  let component: CreditAgricoleComponent;
  let fixture: ComponentFixture<CreditAgricoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditAgricoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditAgricoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
