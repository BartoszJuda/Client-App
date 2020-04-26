import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg){
     return this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data:{
        message: msg
      }
    });
  }
}
