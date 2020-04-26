
import { Injectable } from '@angular/core';
import { LinkDto } from './models/link-dto';
import { Observable } from 'rxjs';
import {HttpClient, HttpResponse, HttpParams} from '@angular/common/http'
import { OperatorDto } from './models/operator-dto';
import { Email } from './models/email';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  counter: number = 0;

  linkForm = {
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

  operatorForm = {
    operatorName: ""
  }

  constructor(private http: HttpClient) { }

  getLinks(): Observable<Array<LinkDto>>{
     return this.http.get<Array<LinkDto>>('http://localhost:8080/api/links/dto')
  }

  putLink(id:number, link: LinkDto){
    return this.http.put('http://localhost:8080/api/links' + id, link);
  }

  postLink(link: LinkDto){
    return this.http.post('http://localhost:8080/api/links/dto', link);
  }

  setLinkForm(link: any){
    this.linkForm = link;
  }

  getLinkForm(): any{
    return this.linkForm;
  }

  getOperatorForm(): any{
    return this.operatorForm;
  }

  getOperators(): Observable<Array<OperatorDto>>{
    return this.http.get<Array<OperatorDto>>('http://localhost:8080/api/links/operators')
  }

  postOperator(operator: OperatorDto){
    return this.http.post('http://localhost:8080/api/links/operators', operator)
  }

  deleteLink(id: number){
    return this.http.delete(`http://localhost:8080/api/links/dto/${id}`)
  }

  sendEmail(email: Email){
    return this.http.post('http://localhost:8080/feedbackAttachment', email)
  }

  deleteOperator(id: number){
    return this.http.delete(`http://localhost:8080/api/links/operators/${id}`)
  }
}
