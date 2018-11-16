import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logged: boolean;
  //in milliseconds
  private timeoutValue: Number= 1000;
  private timeLeft: Number;
  private sessionTimoutObservable: Observable<Object>;
  constructor(private router: Router) { }

  verify() {

  }


}
