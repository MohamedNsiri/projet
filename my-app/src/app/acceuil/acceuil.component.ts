import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {
  
  constructor(public _shared: SharedService){}
}
