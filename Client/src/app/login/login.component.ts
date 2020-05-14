import { CryptographyService } from './../services/cryptography.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public verificacao: Boolean = true;
  bootbox:any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cryptographyService: CryptographyService
  ) { }

  ngOnInit(): void {
    this.buildLogin()
  }

  public buildLogin() {
    this.formLogin = this.formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
    })
  }

  public async registerUser() {
    let user = this.mountTheDataToAPIRegister();
    user.password = await this.encrypted(user.password);
    let returnRegisterUser = await this.userService.registerUser(user);
    if(returnRegisterUser.id){
      alert('Usuário Cadastrado!');
      console.log(returnRegisterUser);
    }else{
      alert('Erro ao Efetuar Cadastro');
      console.log(returnRegisterUser);
    }
    
    this.cleanForm();
  }

  public async loginUser() {
    let user = this.mountTheDataToAPILogin();
    user.password = await this.encrypted(user.password)
    let returnUserLoggedIn = await this.userService.loginUser(user);
    if(returnUserLoggedIn.token){
      alert('Usuário Logado!');
      console.log(returnUserLoggedIn);
    }else{
      alert('Erro ao Efetuar Login');
      console.log(returnUserLoggedIn);
    }
    
    this.cleanForm();
  }

  public async testLoggedIn(){
    let returnUser = await this.userService.testLogin();
    if(returnUser.response){
      alert(returnUser.value);
    }else{
      alert('Usuário não autenticado');
      console.log(returnUser);
    }
  }

  public mountTheDataToAPIRegister() {
    let user;
    user = {
      username: this.formLogin.get('username').value,
      email: this.formLogin.get('email').value,
      password: this.formLogin.get('password').value,
    }
    return user;
  }

  public mountTheDataToAPILogin() {
    let user;
    user = {
      email: this.formLogin.get('email').value,
      password: this.formLogin.get('password').value,
    }
    return user;
  }

  public cleanForm() {
    this.formLogin.get('username').setValue(''),
    this.formLogin.get('email').setValue(''),
    this.formLogin.get('password').setValue('')
  }

  public async encrypted(data){
    if(data){
      return await this.cryptographyService.encrypted(data);
    }
  }

  public decrypted(data){

  }


}
