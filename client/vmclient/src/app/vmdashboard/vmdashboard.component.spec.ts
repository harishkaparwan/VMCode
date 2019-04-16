import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmdashboardComponent } from './vmdashboard.component';

describe('VmdashboardComponent', () => {
  let component: VmdashboardComponent;
  let fixture: ComponentFixture<VmdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
