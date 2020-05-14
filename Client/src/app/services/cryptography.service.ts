import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { HttpClient } from '@angular/common/http';
import { ApplicationProvider } from '../providers/applicationProvider';

@Injectable({
  providedIn: 'root'
})
export class CryptographyService extends BaseServiceService {

  constructor(public http: HttpClient, public applicationProvider: ApplicationProvider) {
    super(http, applicationProvider);
  }

  public async encrypted(data) {
    let returndata = await this.httpGet('encrypted/' + data)
    return returndata.value;
  }

  public async decrypted(data) {

    let returndata = await this.httpGet('decrypted/' + data)
    return returndata;
  }
}
