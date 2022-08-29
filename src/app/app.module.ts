import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { InfoComponent } from './modules/info/info.component';
import { ChartComponent } from './modules/chart/chart.component';
import { HistoryComponent } from './modules/history/history.component';
import { InteractiveComponent } from './modules/interactive/interactive.component';
import { ObserverComponent } from './modules/chart/observer/observer.component';
import { ObservableComponent } from './modules/chart/observable/observable.component';
import { MonitorComponent } from './modules/chart/monitor/monitor.component';
import { PartesComponent } from './modules/partes/partes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    ChartComponent,
    InteractiveComponent,
    HistoryComponent,
    InfoComponent,
    ObserverComponent,
    ObservableComponent,
    MonitorComponent,
    PartesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
