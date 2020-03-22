import { Component, OnInit } from '@angular/core';
import {PROGRADS} from '../mock-pro-grads';
import {Prograd} from '../pro-grads';
import {ProgradService} from '../prograd.service';

@Component({
  selector: 'app-pro-grads',
  templateUrl: './pro-grads.component.html',
  styleUrls: ['./pro-grads.component.css']
})
export class ProGradsComponent implements OnInit {

  prograds: Prograd[];

  selectedPrograd: Prograd;

  constructor(private progradService: ProgradService)
  {}

  getPrograds(): void{
    this.prograds = this.progradService.getPrograds();
  }

  ngOnInit(){
    this.getPrograds();
  }

  onSelect(prograd:Prograd): void{
    this.selectedPrograd = prograd;
  }

}
