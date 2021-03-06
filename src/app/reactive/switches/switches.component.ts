import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: []
})
export class SwitchesComponent implements OnInit {

  myForm:FormGroup=this.fb.group({
    gender:['M', Validators.required],
    notifications:[true, Validators.required],
    termsAndConditions:[false, Validators.requiredTrue]
  })

  person={
    gender: 'F',
    notifications: true
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.myForm.reset({...this.person, termsAndConditions:false});
  }

  save(){
    const formValue={...this.myForm.value}; 
    delete formValue.termsAndConditions;
    
    this.person=formValue;
  }

}
