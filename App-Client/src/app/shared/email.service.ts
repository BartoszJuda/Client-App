import { Injectable } from '@angular/core';
import { MainService } from '../main.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  email = {
    email: ""
  }

  constructor(private mainService: MainService) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    email: new FormControl('', Validators.required),
  })

  initializeFormGroup(){
    this.form.setValue({
      id: null,
      email: '',
    });
  }
}
