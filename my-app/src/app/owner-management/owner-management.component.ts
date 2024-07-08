import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-owner-management',
  templateUrl: './owner-management.component.html',
  styleUrl: './owner-management.component.css'
})
export class OwnerManagementComponent {

  owner = {
    owner_name: '',
    owner_id: 0
  }

  message: string = '';
  messageColor: string = '';

  constructor(private http: HttpClient){}

  addOwner() {
    this.http.post<any>('http://localhost/project/add_owner.php', this.owner)
      .subscribe(
        response => {
          console.log(response); // Log the full response for debugging
          if (response.message === 'User added successfully') {
            // Reset form or take any other action upon success
            this.messageColor = 'lightgreen';
            this.message = response.message;
            this.owner = { owner_name: '', owner_id: 0 };
          } else {
            // Handle error message display
            this.message = response.message; // Assign error message to display in the template
            this.messageColor = 'red';
          }
        },
        error => {
          console.error('Error:', error);
          this.message = 'Error communicating with server'; // Generic error message
        }
      );
  }
}