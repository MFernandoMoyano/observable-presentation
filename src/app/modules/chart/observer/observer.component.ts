import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { MonitorComponent } from '../monitor/monitor.component';
import { Emission, ObservableService } from '../observable.service';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent {
  @Input() label: string = 'subscriptor';

  @ViewChild('input') private input?: MonitorComponent; 
  @ViewChild('output') private output?: MonitorComponent; 

  private subscription: Subscription;

  inputObservable: Observable<Emission>;

  constructor(private os: ObservableService) {
    this.inputObservable = os.subject;
    this.subscription = this.inputObservable.subscribe( em => { this.input?.drawNew(em) });
  }

  changeInputObservable(obs: Observable<Emission>) {
    this.subscription.unsubscribe(); 
    this.subscription = obs.subscribe( em => { this.input?.drawNew(em) })
  }

  setUotput(obs: Observable<Emission>) {
    obs.subscribe( em => { this.output?.drawNew(em) })
  }
}
