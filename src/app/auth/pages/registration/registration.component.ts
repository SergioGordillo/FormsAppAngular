import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {


  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.nameSurnamePattern)] ],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern) ] ],
    username: ['', [Validators.required, this.vs.itCannotBeStrider] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required] ],


  }, {
    validators: [this.vs.fieldsAreEqual("password", "password2")]
  })

  constructor(private fb:FormBuilder, private vs:ValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Fernando Herrera',
      email: "test1@test.com",
      username: 'fer85'
    })
  }

  notAValidField(field:string){
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  createAccount(){
    
    console.log(this.myForm.value);
    
    this.myForm.markAllAsTouched();
  }



}
