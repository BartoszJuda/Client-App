import { NotificationService } from './../../shared/notification.service';
import { MainService } from './../../main.service';
import { LinkService } from './../../shared/link.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OperatorDto } from 'src/app/models/operator-dto';
import { LinkDto } from 'src/app/models/link-dto';
import { Router } from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import { AnimationDurations } from '@angular/material/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  constructor(
    public service: LinkService,
    public mainService: MainService,
    private router: Router,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<LinkComponent>) { }

  operators: Array<OperatorDto> = new Array<OperatorDto>();

  ngOnInit(){
    this.service.getLinks();
    this.getOperators();
  }

  getOperators(){
    this.operators = [];
    this.mainService.getOperators().subscribe(json => {
      console.log(json);
      json.map(o => {
        this.operators.push(o);
      });
    });
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
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

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  refresh(): void{
    window.location.reload();
  }

}
