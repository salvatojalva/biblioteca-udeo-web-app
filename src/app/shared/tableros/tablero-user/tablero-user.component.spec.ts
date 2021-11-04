import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroUserComponent } from './tablero-user.component';

describe('TableroUserComponent', () => {
  let component: TableroUserComponent;
  let fixture: ComponentFixture<TableroUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
