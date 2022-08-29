import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { MonitorComponent } from '../monitor/monitor.component';
import { Emission, ObservableService } from '../observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements AfterViewInit{

  @Input() label?: string;
  observable = new Subject<boolean>();

  
  @ViewChild('monitor') monitor?: MonitorComponent;
  constructor(private observableService: ObservableService) {}

  ngAfterViewInit(): void {
    console.log('this.monitor', this.monitor)
    if (this.monitor) {
      this.monitor.setObservable(this.observableService.subject);
    }
  }

  emit(e: Emission) {
    this.observableService.emit(e);
  }
}
