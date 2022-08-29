import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ObserverComponent } from './observer/observer.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {

  @ViewChild('radio1') radio1? : ObserverComponent;
  @ViewChild('radio2') radio2? : ObserverComponent;
  @ViewChild('radio3') radio3? : ObserverComponent;
  @ViewChild('radio4') radio4? : ObserverComponent;
  @ViewChild('radio5') radio5? : ObserverComponent;


  ngAfterViewInit(): void {
    this.radio1?.setUotput(this.radio1.inputObservable);
    this.radio2?.setUotput(this.radio2.inputObservable);
    this.radio3?.setUotput(this.radio3.inputObservable);
    this.radio4?.setUotput(this.radio4.inputObservable);
    this.radio5?.setUotput(this.radio5.inputObservable);
  }

}
