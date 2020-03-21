import { Component, OnInit } from '@angular/core';
import {PROGRADS} from '../mock-pro-grads';
import {Prograd} from '../pro-grads';

@Component({
  selector: 'app-pro-grads',
  templateUrl: './pro-grads.component.html',
  styleUrls: ['./pro-grads.component.css']
})
export class ProGradsComponent implements OnInit {

  prograds = PROGRADS;

  constructor() { }

  ngOnInit(): void {
  }

  selectedPrograd: Prograd;
  onSelect(prograd:Prograd): void{
    this.selectedPrograd = prograd;
  }

}
