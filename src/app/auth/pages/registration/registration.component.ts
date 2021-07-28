import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required]

  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
