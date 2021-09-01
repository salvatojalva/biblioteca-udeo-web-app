import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorialComponent } from './form-editorial.component';

describe('FormEditorialComponent', () => {
  let component: FormEditorialComponent;
  let fixture: ComponentFixture<FormEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
