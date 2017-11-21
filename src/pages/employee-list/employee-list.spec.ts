import { TestBed, ComponentFixture } from '@angular/core/testing';
import {} from 'jasmine';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeList } from './employee-list';

describe('EmployeeListPage', () => {

  let fixture: ComponentFixture<EmployeeList>;
  let instance: EmployeeList;

  const navControllerStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      declarations: [
        EmployeeList,
      ],
      providers: [
        { provide: NavController, useValue: navControllerStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeList);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the employee page', () => {
    expect(instance).toBeTruthy();
  });

  it('should show a title', () => {
    const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
    expect(h2.textContent).toContain('Codecentric AG - Mitarbeiterliste');
  });

});
