import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'day', loadChildren: () => import('./day-view/day-view.module').then(m => m.DayViewRoutingModule) },
  { path: 'week', loadChildren: () => import('./week-view/week-view.module').then(m => m.WeekViewRoutingModule) },
  { path: 'month', loadChildren: () => import('./month-view/month-view.module').then(m => m.MonthViewRoutingModule) },
  { path: 'year', loadChildren: () => import('./year-view/year-view.module').then(m => m.YearViewRoutingModule) },
  { path: '', redirectTo: '/month', pathMatch: 'full' }, // Redirect to the default view
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }