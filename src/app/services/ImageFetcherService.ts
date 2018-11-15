import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Request, Headers } from '@angular/http';

@Injectable()

export class ImageFetcherService {


  constructor(private http: Http) { }
  fetchImg(callback) {
       /*let baseUrl = ApiUrl;
       let requestOptions = new RequestOptions({
            method: req.method,
            url: baseUrl+req.url,
            headers: req.header ? req.header : this.getHeader(),
            body: JSON.stringify(req.params)
        });

        return this.http.request(new Request(requestOptions))
                        .map((res:Response) => res.json());
       */
  }
}
/*  import {Injectable, Inject} from '@angular/core';
import {Http, Response, RequestOptions, Request, Headers} from '@angular/http';

declare let ApiUrl : any;

@Injectable()
export class httpService {
    constructor(private http: Http){}

    getHeader = () => {
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');

        return headers;
    };

    request = (req) => {
        let baseUrl = ApiUrl,
            requestOptions = new RequestOptions({
            method: req.method,
            url: baseUrl+req.url,
            headers: req.header ? req.header : this.getHeader(),
            body: JSON.stringify(req.params)
        });

        return this.http.request(new Request(requestOptions))
                        .map((res:Response) => res.json());
    }
}*/