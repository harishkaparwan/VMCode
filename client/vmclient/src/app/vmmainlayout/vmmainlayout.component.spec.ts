import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmmainlayoutComponent } from './vmmainlayout.component';

describe('VmmainlayoutComponent', () => {
  let component: VmmainlayoutComponent;
  let fixture: ComponentFixture<VmmainlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmmainlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmmainlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
