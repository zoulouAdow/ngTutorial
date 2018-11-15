import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APIHelperService {
  private basePath: string = "http://34.249.171.19/angular/public";
  constructor(private http: HttpClient) { }

  public login(callback, username, pass) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      })
    }
    this.http.post(this.basePath + "/login",{"pseudo":username,"password":pass}, httpOptions)
      .toPromise()
      .then((res) => callback(res))
      .catch((err) => console.log("error during connection"));
  }
}
