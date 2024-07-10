import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {

  owner = {
    owner_name: '',
    owner_id: 0
  };

  updated_owner_name: string = '';

  message: string = '';
  messageColor: string = '';

  constructor(public _shared: SharedService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.owner.owner_id = Number(this.route.snapshot.paramMap.get('owner_id'));
    this.owner.owner_name = String(this.route.snapshot.paramMap.get('owner_name'));
  }

  editOwner() {
    console.log(this.owner)
    this._shared.editOwner(this.owner).subscribe(
      response => {
        if (response.message === 'Owner Updated successfully') {
          console.log(response);
          this.owner.owner_name = this.updated_owner_name;
          this._shared.owners = this._shared.owners.filter(item => item.owner_id !== this.owner.owner_id);
          console.log(this._shared.owners);
          this._shared.owners.push(this.owner);
          console.log(this._shared.owners);
          this.messageColor = 'lightgreen';
          this.message = 'Owner Updated successfully';
        }
      }
    )
  }
}
