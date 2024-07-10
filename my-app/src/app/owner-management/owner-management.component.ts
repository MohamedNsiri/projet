import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-owner-management',
  templateUrl: './owner-management.component.html',
  styleUrls: ['./owner-management.component.css']
})
export class OwnerManagementComponent {

  owner = {
    owner_name: '',
    owner_id: 0
  };

  message: string = '';
  messageColor: string = '';

  constructor(public _shared: SharedService) { }

  addOwner() {
    this._shared.addOwner(this.owner).subscribe(
      response => {
        if (response.message === 'User added successfully') {
          this._shared.owners.push(this.owner); 
          this.messageColor = 'lightgreen';
          this.message = response.message;
          this.owner = { owner_name: '', owner_id: 0 };
        } else {
          this.message = response.message;
          this.messageColor = 'red';
        }
      },
      error => {
        console.error('Error:', error);
        this.message = 'Error communicating with server';
      }
    );
  }
}
