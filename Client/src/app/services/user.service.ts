import { BaseServiceService } from './base-service.service';
import { Injectable } from "@angular/core";
import { ApplicationProvider } from "../providers/applicationProvider";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseServiceService {

  constructor(public http: HttpClient, public applicationProvider: ApplicationProvider) {
    super(http, applicationProvider);
  }

  public async registerUser(user) {
    const params = {
      username: user.username,
      email: user.email,
      password: user.password
    }
    try {
      let returnUser = await this.httpPost('register', params);
      return returnUser;
    } catch (error) {
      return error
    }
  }

  public async loginUser(user) {
    const params = {
      email: user.email,
      password: user.password,
    }
    try {
      let returnUser = await this.httpPost('authenticate', params);
      localStorage.setItem('token', returnUser.token);
      this.applicationProvider.userToken = returnUser.token;
      return returnUser;
    } catch (error) {
      return error
    }

  }

  public async testLogin() {
    let returnUser
    try {
      returnUser = await this.httpGet('app');
      return returnUser;
    } catch (error) {
      return error
    }
  }
}
