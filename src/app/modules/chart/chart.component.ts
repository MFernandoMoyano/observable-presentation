import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Emission } from './observable.service';
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
    this.radio1?.setUotputObservable(this.radio1.inputObservable);
    this.radio2?.setUotputObservable(this.radio2.inputObservable);
    this.radio3?.setUotputObservable(this.radio3.inputObservable);
    this.radio4?.setUotputObservable(this.radio4.inputObservable);
    this.radio5?.setUotputObservable(this.radio5.inputObservable);
  }

}

/* 
  ObserverComponent expone los siguientes elementos:

    atributos:
      inputObservable: expone el observable original (señal de radio);
      label: Necesario por angular, no lo usaremos.

    metodos:
      changeInputObservable: cambia el observable inicial (radio) por cualquier otro compatible.
      setOuputObservable: Cambia la salida (observable) de nuestra radio.
 */