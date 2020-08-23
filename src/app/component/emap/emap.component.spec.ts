import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmapComponent } from './emap.component';

describe('EmapComponent', () => {
  let component: EmapComponent;
  let fixture: ComponentFixture<EmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
