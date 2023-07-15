import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerRecordComponent } from './components/manager/manager-record/manager-record/manager-record.component';
import { ManagerRequestComponent } from './components/manager/manager-request/manager-request/manager-request.component';
import { EmployeeRequestComponent } from './components/employee/employee-request/employee-request/employee-request.component';

const routes: Routes = [
  {path : "manager-record",component:ManagerRecordComponent},
  {path: "manager-request",component:ManagerRequestComponent},
  {path:"employee-request",component:EmployeeRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
