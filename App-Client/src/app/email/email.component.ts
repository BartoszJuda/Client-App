import { FormControl } from '@angular/forms';
import { Email } from './../models/email';
import { MainService } from './../main.service';

import { Component, OnInit } from '@angular/core';
import { EmailService } from '../shared/email.service';
import { NotificationService } from '../shared/notification.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {



  constructor(public service: EmailService,
    public mainService: MainService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<EmailComponent>) { }



  ngOnInit(): void {
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  onSubmit(){
    if(this.service.form.valid){
      this.mainService.sendEmail(this.service.form.value).subscribe(data => {
        let res:any = data;
        console.log("ok")
      })
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Send succesfully!');
      this.onClose();
    }
}

}
