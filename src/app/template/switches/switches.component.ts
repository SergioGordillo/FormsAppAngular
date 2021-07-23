import { Component} from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [`
  input{
    cursor: pointer;
  }
  .form-check>label{
    cursor: pointer;
  }
  `]
})
export class SwitchesComponent {

  person={
    gender: '',
    notifications: true
  }

  termsAndConditions:boolean=false;
 
}
