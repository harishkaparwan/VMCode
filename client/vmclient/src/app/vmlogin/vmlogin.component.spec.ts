import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmloginComponent } from './vmlogin.component';

describe('VmloginComponent', () => {
  let component: VmloginComponent;
  let fixture: ComponentFixture<VmloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
