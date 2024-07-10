import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { NavigationEnd, Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.css']
})
export class OwnerTableComponent implements OnInit {

  constructor(private http: HttpClient, public _shared: SharedService, private router: Router) { }

  ngOnInit() {
    this.fetchOwners();
  }

  fetchOwners() {
    this._shared.fetchOwners().subscribe(
      data => {
        this._shared.owners = data;
      },
      error => {
        console.error('Error fetching owners:', error);
      }
    );
  }

  deleteOwner(id: number) {
    if (confirm('Are you sure you want to delete this owner?')) {
      // Make HTTP DELETE request
      if(this._shared.owners.length >= 2){
        this.http.delete(`http://localhost/project/delete_owner.php?id=${id}`)
        .subscribe(
          response => {
            console.log("length ="+this._shared.owners.length)
            console.log('Owner deleted successfully:', response);
            
            this.fetchOwners(); // Refresh owners after deletion
            
          },
          error => {

            console.error('Error deleting owner:', error);
          }
        );
      }else{
        this.http.delete(`http://localhost/project/delete_owner.php?id=${id}`)
        .subscribe(
          response => {
            console.log("length ="+this._shared.owners.length)
            console.log('Owner deleted successfully:', response);
            this.fetchOwners();
          },
          error => {
            this.fetchOwners();
            console.error('Error deleting owner:', error);
          }
        );
      }
     
      
    }
  }

  verifyTableContent(): boolean{
    if(this._shared.owners.length == 0){
      return true;
    }
    return false;
  }

  editOwner(id: number) {
    // Implement edit functionality if needed
  }
}
