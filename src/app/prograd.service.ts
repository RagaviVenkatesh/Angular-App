import { Injectable } from '@angular/core';
import {Prograd} from './pro-grads';
import {PROGRADS} from './mock-pro-grads';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgradService {

  constructor() { }

  getPrograds(): Observable<Prograd[]> {
    return of(PROGRADS);
  }
}
