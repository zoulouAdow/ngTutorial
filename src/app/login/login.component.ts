import { Component, OnInit } from '@angular/core';
import { APIHelperService } from '../services/apihelper.service';
import { CanActivate, Router } from "@angular/router";
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiHelper: APIHelperService,
              private router: Router,
              private loginService:LoginService) { }
  public username: String;
  public password: String;
  public logged: boolean = false;
  public logErr: boolean = false;
  ngOnInit() {
    this.loginService.verify();   
  }
  login() {
    this.logErr = false;
    this.apiHelper.login((res) => {
      this.logged = res.success;
      this.logErr = !this.logged;
      console.log("server answered " + this.logged);
      console.log(JSON.stringify(res, null, 2));
      if (this.logged)
        this.router.navigate(['./tickets']);
    },
      this.username,
      this.password);
  }

}
