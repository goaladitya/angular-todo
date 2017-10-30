import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginbarComponent } from './loginbar/loginbar.component';
import { MidbodyComponent } from './midbody/midbody.component';
import { EndbodyComponent } from './endbody/endbody.component';
import { WelcomeComponent } from './home/welcome.component';
import { MidleftComponent } from './midleft/midleft.component';
import { MidrightComponent } from './midright/midright.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginbarComponent,
    MidbodyComponent,
    EndbodyComponent,
    WelcomeComponent,
    MidleftComponent,
    MidrightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
