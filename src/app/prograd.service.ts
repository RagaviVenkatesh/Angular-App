import { Injectable } from '@angular/core';
import {Prograd} from './pro-grads';
import {PROGRADS} from './mock-pro-grads';

@Injectable({
  providedIn: 'root'
})
export class ProgradService {

  constructor() { }

  getPrograds(): Prograd[] {
    return PROGRADS;
  }
}
