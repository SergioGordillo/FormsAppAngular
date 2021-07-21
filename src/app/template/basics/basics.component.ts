import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  initForm={
    product: 'Google Nest',
    price: 59,
    stock: 100
  }

  @ViewChild('myForm') myForm!: NgForm

  constructor() { }

  ngOnInit(): void {
  }

  validateName():boolean{
    let isValid: boolean=false;
    isValid=this.myForm?.controls.product?.invalid && this.myForm?.controls.product?.touched;
    return isValid;
  }

  validatePrice():boolean{
    let isValid: boolean=false;
    isValid=this.myForm?.controls.price?.touched && this.myForm?.controls.price?.value<0;
    return isValid; 


  }



  save(){
    console.log(this.myForm)

    this.myForm.resetForm({
      price: "0",
      stock: "0"
    });
  }

}
