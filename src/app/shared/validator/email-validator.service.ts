import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl} from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { map, switchMap} from 'rxjs/operators';
import { UserService } from '../../auth/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService{

  static validate(us: UserService) {

    return (control:AbstractControl) => {
      if (control.pristine) {
        return of(null); 
      } 

      return timer(500).pipe(
          switchMap(()=>{
            return us.validateEmail(control.value)
          }), map (resp=> resp?.length===0 ? null : {emailAlreadyExists: true})
          )
    }

  }
}
