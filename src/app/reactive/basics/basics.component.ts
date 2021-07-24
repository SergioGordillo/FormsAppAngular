import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent{

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

}
