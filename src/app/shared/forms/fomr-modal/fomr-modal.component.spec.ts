import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrModalComponent } from './fomr-modal.component';

describe('FomrModalComponent', () => {
  let component: FomrModalComponent;
  let fixture: ComponentFixture<FomrModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomrModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
