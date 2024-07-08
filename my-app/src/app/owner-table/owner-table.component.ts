import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.css']
})
export class OwnerTableComponent implements OnInit {

  constructor(private http: HttpClient, public _shared: SharedService) { }

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
      this._shared.deleteOwner(id).subscribe(
        response => {
          console.log('Owner deleted successfully:', response);
          this.fetchOwners();
        },
        error => {
          console.error('Error deleting owner:', error);
        }
      );
    }
  }

  editOwner(id: number) {
  }
}
