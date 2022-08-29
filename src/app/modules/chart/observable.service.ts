import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';


type EmissionType = 'square' | 'circle';
type Colors = 'red' | 'purple' | 'blue' | 'green';

export interface Emission {
  type: EmissionType;
  color: Colors;
}

@Injectable({ providedIn: 'root' })
export class ObservableService {

  subject = new ReplaySubject<Emission>();

  constructor()  {
    this.subject.subscribe(service => console.log('service', service))
  }

  emit(e: Emission) {
    this.subject.next(e);
  }
}