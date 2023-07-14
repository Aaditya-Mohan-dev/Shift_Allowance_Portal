import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { ManagerComponent } from './components/manager/manager/manager.component';
import { HrComponent } from './components/hr/hr/hr.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeComponent,
    ManagerComponent,
    HrComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
