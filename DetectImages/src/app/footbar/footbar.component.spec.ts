import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodbarComponent } from './footbar.component';

describe('FoodbarComponent', () => {
  let component: FoodbarComponent;
  let fixture: ComponentFixture<FoodbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
