import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnioListComponent } from './anio-list.component';

describe('AnioListComponent', () => {
  let component: AnioListComponent;
  let fixture: ComponentFixture<AnioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
