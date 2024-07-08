import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.component.html',
  styleUrl: './owner-table.component.css'
})
export class OwnerTableComponent {
  owners: any[] = [];
  emptyMessage: string = '';

  fetchOwners(){
    this.http.get<any[]>('http://localhost/project/select_owner.php')
    .subscribe(
      (data) => {
        this.owners = data;
      },
      (error) => {
        console.error('Error fetching owners:', error);
      }
    );
  }

  ngOnInit() {
    this.fetchOwners();
  }

  deleteOwner(id : number){
    this.http.delete<any>('http://localhost/project/delete_owner.php?id=' + id)
      .subscribe(
        (response) => {
          console.log('Owner deleted successfully:', response);
          window.location.reload();
          this.fetchOwners();
        },
        (error) => {
          console.error('Error deleting owner:', error);
        }
      );
  }
  editOwner(id : number){}

  constructor(private http: HttpClient){
  }
}
