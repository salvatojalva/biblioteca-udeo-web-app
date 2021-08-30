import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeEditComponent } from './sede-edit.component';

describe('SedeEditComponent', () => {
  let component: SedeEditComponent;
  let fixture: ComponentFixture<SedeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
