import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  nameSurnamePattern: string ="([a-zA-Z]+) ([a-zA-Z]+)"



  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.nameSurnamePattern)] ]

  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  notAValidField(field:string){
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  createAccount(){
    
    console.log(this.myForm.value);
    
    this.myForm.markAllAsTouched();
  }



}
