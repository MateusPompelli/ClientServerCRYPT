import { ApplicationProvider } from './providers/applicationProvider';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { UserService } from './services/user.service';
import { CryptographyService } from './services/cryptography.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    ApplicationProvider,
    CryptographyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
