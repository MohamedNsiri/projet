import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-deletion-confirmation-dialog',
  templateUrl: './deletion-confirmation-dialog.component.html',
  styleUrl: './deletion-confirmation-dialog.component.css'
})
export class DeletionConfirmationDialogComponent {
  constructor(public deletionConfirmationDialog: MatDialogRef<DeletionConfirmationDialogComponent>, public _shared: SharedService) {}

  closeDialog(): void {
    this.deletionConfirmationDialog.close();
  }
}
