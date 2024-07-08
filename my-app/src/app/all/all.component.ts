import { Component } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {
  constructor(public _shared: SharedService){}
}