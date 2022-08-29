import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './modules/chart/chart.component';
import { InteractiveComponent } from './modules/interactive/interactive.component';
import { HistoryComponent } from './modules/history/history.component';
import { InfoComponent } from './modules/info/info.component';
import { PartesComponent } from './modules/partes/partes.component';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', component: InfoComponent, data: { animation: 'enterLeavePage' } },
  { path: 'history', component: HistoryComponent, data: { animation: 'enterLeavePage' } },
  { path: 'partes', component: PartesComponent, data: { animation: 'enterLeavePage' } },
  { path: 'interactive', component: InteractiveComponent, data: { animation: 'enterLeavePage' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
