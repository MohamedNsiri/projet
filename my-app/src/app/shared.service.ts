import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  owners: any[] = [];
  
  constructor(private http: HttpClient) { }

  fetchOwners() {
    this.http.get<any[]>('http://localhost/project/select_owner.php').subscribe(
      data => {
        this.owners = data;
        console.log(this.owners)
      },
      error => {
        console.error('Error fetching owners:', error);
      }
    )
  }

  deleteOwner(id: number) {
    return this.http.delete<any>('http://localhost/project/delete_owner.php?id=' + id);
  }

  addOwner(owner: any) {
    return this.http.post<any>('http://localhost/project/add_owner.php', owner);
  }

  editOwner(owner: any){
    return this.http.post<any>('http://localhost/project/edit_owner.php', owner);
  }
}
