import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectUrlComponent } from './detect-url.component';

describe('DetectUrlComponent', () => {
  let component: DetectUrlComponent;
  let fixture: ComponentFixture<DetectUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
