import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CodecentricEmployeeList } from './app.component';

import { EmployeeList } from '../pages/employee-list/employee-list';
import { EmployeeProvider } from '../providers/employee-provider';

@NgModule({
  declarations: [
    CodecentricEmployeeList,
    EmployeeList,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(CodecentricEmployeeList, {
      mode: 'ios',
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CodecentricEmployeeList,
    EmployeeList,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmployeeProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {
}
