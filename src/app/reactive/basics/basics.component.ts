import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit{

  // myForm:FormGroup=new FormGroup({
  //   name: new FormControl('Google Nest'),
  //   price: new FormControl(59),
  //   stock: new FormControl(100),
  // });

  myForm:FormGroup=this.fb.group({
    name: ['Google Nest', [Validators.required, Validators.minLength(3)]],
    price: [59, [Validators.required, Validators.min(0)]],
    stock: [100, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.myForm.setValue({
      name: 'Google Nest',
      price: 59,
      stock: 100
    })
  }

  validateField(field:string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  save(){

    if (this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return ;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }



}
