import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrl: './owner-edit.component.css'
})
export class OwnerEditComponent {  

  owner = {
    owner_name: '',
    owner_id: 0
  };

  message: string = '';
  messageColor: string = '';

  constructor(private http: HttpClient, public _shared: SharedService) { }

}
