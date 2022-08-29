import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './modules/chart/chart.component';
import { FabulaComponent } from './modules/fabula/fabula.component';
import { HistoryComponent } from './modules/history/history.component';
import { InfoComponent } from './modules/info/info.component';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', component: InfoComponent, data: { animation: 'enterLeavePage' } },
  { path: 'history', component: HistoryComponent, data: { animation: 'enterLeavePage' } },
  { path: 'fabula', component: FabulaComponent, data: { animation: 'enterLeavePage' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
