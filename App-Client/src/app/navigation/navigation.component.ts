import { EmailComponent } from './../email/email.component';
import { EmailService } from './../shared/email.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private service: EmailService,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  sendEmail(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "110%";
    this.dialog.open(EmailComponent, dialogConfig);
  }

  refresh(): void{
    window.location.reload();
  }

}
