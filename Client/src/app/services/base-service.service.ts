import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationProvider } from "../providers/applicationProvider";

@Injectable()
export class BaseServiceService {

  private _urlAPI = environment.baseUrl

  constructor(private HttpClient: HttpClient, public applicationProvider: ApplicationProvider) { }

  public getUrlAPI(pParams) {
    return this._urlAPI + pParams;
  }

  public httpGet(pUrlParams) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('token', this.applicationProvider.userToken);
    headers = headers.set('Authorization', 'Bearer ' + this.applicationProvider.userToken);


    return this.HttpClient.get(this.getUrlAPI(pUrlParams), { headers: headers })
      .pipe(map(res => {
        return <any>res
      }))
      .toPromise();
  }

  public httpPost(pUrlParams, pPostBody) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers.append('token', this.applicationProvider.userToken);
    headers = headers.set('Authorization', 'Bearer ' + this.applicationProvider.userToken);


    return this.HttpClient.post(this.getUrlAPI(pUrlParams), pPostBody, { headers: headers })
      .pipe(map(res => { return <any>res; }))
      .toPromise();
  }

  public httpPut(pUrlParams, pPostBody) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('token', this.applicationProvider.userToken);
    headers = headers.set('Authorization', 'Bearer ' + this.applicationProvider.userToken);

    return this.HttpClient.put(this.getUrlAPI(pUrlParams), pPostBody, { headers: headers })
      .pipe(map(res => { return <any>res }))
      .toPromise();
  }

  public httpDelete(pUrlParams, pDeleteBody?) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('token', this.applicationProvider.userToken)
    headers = headers.set('Authorization', 'Bearer ' + this.applicationProvider.userToken);

    return this.HttpClient
      .delete(this.getUrlAPI(pUrlParams), { headers: headers, params: pDeleteBody })
      .pipe(map(res => <any>res))
      .toPromise();
  }

}
