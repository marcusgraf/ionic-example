import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CodecentricEmployeeList } from './app.component';

describe('CodecentricEmployeeList', () => {

  let fixture: ComponentFixture<CodecentricEmployeeList>;
  let instance: CodecentricEmployeeList;

  const platformStub = {
    ready: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
  };
  const statusBarStub = {
    styleDefault: (): void => undefined
  };
  const splashScreenStub = {
    hide: (): void => undefined
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        CodecentricEmployeeList
      ],
      providers: [
        {provide: Platform, useValue: platformStub},
        {provide: StatusBar, useValue: statusBarStub},
        {provide: SplashScreen, useValue: splashScreenStub}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodecentricEmployeeList);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the root page', () => {
    expect(instance).toBeTruthy();
  });

});
