import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectFilesComponent } from './detect-files.component';

describe('DetectFilesComponent', () => {
  let component: DetectFilesComponent;
  let fixture: ComponentFixture<DetectFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
