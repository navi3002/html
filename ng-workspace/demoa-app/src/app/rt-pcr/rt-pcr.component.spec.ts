import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtPcrComponent } from './rt-pcr.component';

describe('RtPcrComponent', () => {
  let component: RtPcrComponent;
  let fixture: ComponentFixture<RtPcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtPcrComponent ]
    })
    .compileComponents(); 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtPcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
