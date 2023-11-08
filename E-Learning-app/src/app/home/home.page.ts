import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  sign!: FormGroup;

  constructor() {}

  inForm(){
    this.sign = new FormGroup({
     email: new FormControl('', {validators: [Validators.required, Validators.email]}),
     password: new FormControl('',{validators: [Validators.required, Validators.minLength(8)]})
    })
  }

  onSubmit(){
    if(!this.sign.valid) 
    return ;
    console.log(this.sign.value)
  }



}
