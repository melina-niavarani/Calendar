// day-view-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearViewCalenderComponent } from '../year-view-calender/year-view-calender.component';

const routes: Routes = [
  { path: '', component: YearViewCalenderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YearViewRoutingModule { }
