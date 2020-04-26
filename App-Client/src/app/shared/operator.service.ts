import { OperatorDto } from './../models/operator-dto';
import { MainService } from './../main.service';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  operators: Array<OperatorDto> = new Array<OperatorDto>();

  operator = {
    operatorName: "",
  }

  constructor(private mainService: MainService) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    operatorName: new FormControl('', Validators.required),
  })

  initializeFormGroup(){
    this.form.setValue({
      id: null,
      operatorName: '',
    });
  }

  getOperators(){
    this.operators = [];
    this.mainService.getOperators().subscribe(json => {
      console.log(json);
      json.map(l => {
        this.operators.push(l);
      });
    });
  }

  create(operator){
    let result: OperatorDto={
      operatorName: operator.operatorName,
    }
    this.mainService.postOperator(result).subscribe(operator => {}, (err: Error) => {console.log(err.message)},)
  }

  populateForm(operator){
    this.form.patchValue(operator);
  }

  delete(id: number){
    this.mainService.deleteOperator(id).subscribe(data => {
      let res:any = data;
      console.log("ok")
    })
  }
}
