import { Component} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent{

  myForm:FormGroup=this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGame: this.fb.array([
      ['FIFA 22'], ['Fortnite']
    ], Validators.required) 
  })

  newGame:FormControl=this.fb.control('', Validators.required)

  get favoriteArray(){
       return this.myForm.get('favoriteGame') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  validateField(field:string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  add(){
    if(this.newGame.invalid){
      return ;
    }

    this.favoriteArray.push(new FormControl(this.newGame.value, Validators.required))
    this.newGame.reset();
  }

  save(){

    if (this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return ;
    }

     console.log(this.myForm.value)
  }

  delete(i:number){
    this.favoriteArray.removeAt(i);
  }

}
