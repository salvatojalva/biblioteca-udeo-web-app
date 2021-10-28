import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuStudentComponent } from './side-menu-student.component';

describe('SideMenuStudentComponent', () => {
  let component: SideMenuStudentComponent;
  let fixture: ComponentFixture<SideMenuStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
