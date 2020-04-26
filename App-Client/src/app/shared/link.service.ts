import { OperatorComponent } from './../operators/operator/operator.component';
import { OperatorDto } from 'src/app/models/operator-dto';
import { LinkDto } from 'src/app/models/link-dto';
import { MainService } from './../main.service';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpResponse, HttpParams} from '@angular/common/http';
import *as _ from 'lodash';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private mainService: MainService) { }

  links: Array<LinkDto> = new Array<LinkDto>();

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    operator: new FormControl(0, Validators.required),
    linkName: new FormControl('', Validators.required),
    cityA: new FormControl('', Validators.required),
    zipCodeA: new FormControl('', Validators.required),
    streetA: new FormControl('', Validators.required),
    cityB: new FormControl('', Validators.required),
    zipCodeB: new FormControl('', Validators.required),
    streetB: new FormControl('', Validators.required),
    linkLength: new FormControl('', Validators.required),
    subscriptionFee: new FormControl('', Validators.required),
    technology: new FormControl(1, Validators.required),
    description: new FormControl('', Validators.required),
  });

  initializeFormGroup(){
    this.form.setValue({
      id: null,
      operator: 0,
      linkName: '',
      cityA: '',
      cityB: '',
      zipCodeA: '',
      zipCodeB: '',
      streetA: '',
      streetB: '',
      linkLength: '',
      subscriptionFee: '',
      technology: 1,
      description: '',
    });
  }

  link = {
    linkName: "",
    operator: "",
    cityA: "",
    zipCodeA: "",
    streetA: "",
    cityB: "",
    zipCodeB: "",
    streetB: "",
    technology: "",
    linkLength: "",
    subscriptionFee: "",
    description: ""
  }

  operator = {
    operatorName: "",
  }

  flag: boolean = false;

  getLinks(){
    this.links = [];
    this.mainService.getLinks().subscribe(json => {
      console.log(json);
      json.map(l => {
        this.links.push(l);
      });
    });
  }

   create(link) {
       let result: LinkDto={
       linkName: link.linkName,
       operator: link.operator,
       cityA: link.cityA,
       zipCodeA: link.zipCodeA,
       streetA: link.streetA,
       cityB: link.cityB,
       zipCodeB: link.zipCodeB,
       streetB: link.streetB,
       technology: link.technology,
       linkLength: link.linkLength,
       subscriptionFee: link.subscriptionFee,
       description: link.description,
     }
     this.mainService.postLink(result).subscribe(link => {}, (err: Error) => {console.log(err.message)},)
   }
  update(id: number, link):void{
    this.mainService.putLink(id, link).subscribe(link => {
    }, (err: Error) => {console.log(err.message)}, () => {this.flag = false; this.getLinks()});
  }

  delete(id: number){
    this.mainService.deleteLink(id).subscribe(data => {
      let res:any = data;
      console.log("ok")
    })
  }

  populateForm(link){
    this.form.patchValue(link);
  }
}
