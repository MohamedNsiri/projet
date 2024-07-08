import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  owners: any[] = []; 
  
  constructor(private http: HttpClient) { }

  fetchOwners() {
    return this.http.get<any[]>('http://localhost/project/select_owner.php');
  }

  deleteOwner(id: number) {
    return this.http.delete<any>('http://localhost/project/delete_owner.php?id=' + id);
  }

  addOwner(owner: any) {
    return this.http.post<any>('http://localhost/project/add_owner.php', owner);
  }
}
