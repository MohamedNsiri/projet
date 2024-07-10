import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.css']
})
export class OwnerTableComponent implements OnInit {

  constructor(public _shared: SharedService, private router: Router) { }

  ngOnInit() {
    this._shared.fetchOwners();
  }

  deleteOwner(id: number) {
    if (confirm('Are you sure you want to delete this owner?')) {
      this._shared.deleteOwner(id)
        .subscribe(
          response => {
            console.log('Owner deleted successfully:', response);
            this._shared.fetchOwners();            
          },
          error => {
            console.error('Error deleting owner:', error);
          }
        )
      }     
    }

  verifyTableContent(): boolean{
    if(this._shared.owners.length == 0){
      return true;
    }
    return false;
  }
}
