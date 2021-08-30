import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnioCreateComponent } from './anio-create.component';

describe('AnioCreateComponent', () => {
  let component: AnioCreateComponent;
  let fixture: ComponentFixture<AnioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnioCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
