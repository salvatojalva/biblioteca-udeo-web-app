import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnioEditComponent } from './anio-edit.component';

describe('AnioEditComponent', () => {
  let component: AnioEditComponent;
  let fixture: ComponentFixture<AnioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnioEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
