import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Emission } from '../observable.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent {

  observable?: Observable<Emission>;
  @ViewChild('monitor') monitorRef?: ElementRef;

  constructor(private renderer: Renderer2) { }
  
  setObservable(obs: Observable<Emission>) {
    this.observable = obs;
    this.observable.subscribe(em => {
      this.drawNew(em);
    })
    console.log('this.observable', this.observable)
  }

  drawNew(emission: Emission) {
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'emission' );
    this.renderer.addClass(div, emission.color );
    this.renderer.addClass(div, emission.type );
    this.renderer.appendChild(this.monitorRef?.nativeElement, div)
  }

}
