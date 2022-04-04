import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDisplayComponentComponent } from './count-display-component.component';

describe('CountDisplayComponentComponent', () => {
  let component: CountDisplayComponentComponent;
  let fixture: ComponentFixture<CountDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDisplayComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
