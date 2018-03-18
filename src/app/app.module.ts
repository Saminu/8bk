import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


// Must export the config
// export const firebaseConfig = {
//   apiKey: 'AIzaSyAaTLLTBfT8-tlCXOKlp4LrwQzhVWjbM1Q',
//   authDomain: 'angular-pre.firebaseapp.com',
//   databaseURL: 'https://angular-pre.firebaseio.com',
//   storageBucket: 'angular-pre.appspot.com',
//   messagingSenderId: '796422970338'
// };

export const firebaseConfig = {
  apiKey: 'AIzaSyA3fWBrxprX9G-V5FL9mKh8I9byEp2L5Cg',
  authDomain: 'vraidrop.firebaseapp.com',
  databaseURL: 'https://vraidrop.firebaseio.com',
  storageBucket: 'vraidrop.appspot.com',
  messagingSenderId: '506412316286'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
