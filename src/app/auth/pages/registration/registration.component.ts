import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {


  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.nameSurnamePattern)] ],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern) ], [EmailValidatorService.validate(this.us)] ],
    username: ['', [Validators.required, this.vs.itCannotBeStrider] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required] ],


  }, {
    validators: [this.vs.fieldsAreEqual("password", "password2")]
  })

  constructor(private fb:FormBuilder, 
              private vs:ValidatorService,
              private us:UserService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Fernando Herrera',
      email: "test1@test.com", 
      username: 'fer85',
      password: 123456,
      password2: 123456 
    })
  }

  notAValidField(field:string){
    return this.myForm.get(field)?.errors?.required && this.myForm.get(field)?.touched;
  }

  emailRequired(){ return this.myForm.get('email')?.errors?.required && this.myForm.get('email')?.touched;}

  emailFormat(){return this.myForm.get('email')?.errors?.pattern && this.myForm.get('email')?.touched;}

  emailAlreadyExists(){return this.myForm.get('email')?.errors?.emailAlreadyExists && this.myForm.get('email')?.touched;}

  createAccount(){
    
    console.log(this.myForm.value);
    
    this.myForm.markAllAsTouched();
  }



}
