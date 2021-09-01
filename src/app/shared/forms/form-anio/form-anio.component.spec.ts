import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnioComponent } from './form-anio.component';

describe('FormAnioComponent', () => {
  let component: FormAnioComponent;
  let fixture: ComponentFixture<FormAnioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAnioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
