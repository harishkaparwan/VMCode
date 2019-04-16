import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmregformComponent } from './vmregform.component';

describe('VmregformComponent', () => {
  let component: VmregformComponent;
  let fixture: ComponentFixture<VmregformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmregformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
