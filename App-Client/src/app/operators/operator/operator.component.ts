import { Router } from '@angular/router';
import { MainService } from './../../main.service';
import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'src/app/shared/operator.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor(public service: OperatorService,
    public mainService: MainService,
    private router: Router,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<OperatorComponent>) { }

  ngOnInit() {
    this.service.getOperators();
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
      this.service.create(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Submitted succesfully!');
      this.onClose();
    }
}
}
