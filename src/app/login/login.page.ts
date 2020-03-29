import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckCredentialDto } from '../api/models/check-credential-dto';
import { AuthService } from 'src/app/api/services/auth.service';
import { TokenDto } from '../api/models/token-dto';
import { CookieService } from '@ngx-toolkit/cookie';
import * as decode from 'jwt-decode';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordType : string = 'password';
  passwordShown: boolean = false;
  iconeye : string = 'eye';
  formInput: FormGroup;

  constructor(
    private router: Router, 
    private nativePageTransitions : NativePageTransitions,
    private formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly cookieSrv: CookieService,
    public toastController: ToastController
    ) {
      this.formInput = this.formBuilder.group({
        email: ['', Validators.compose([Validators.email, Validators.required])],
        password: ['', Validators.required]
      });
     }

  ngOnInit() {
  }

  tabPage(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50,
      androiddelay: 50
     }

    this.nativePageTransitions.slide(options);
    this.router.navigateByUrl('/tabs/tab1');
  }

  public togglePassword(){

      if (this.passwordShown) {
        this.passwordShown = false;
        this.passwordType = 'password';
        this.iconeye = 'eye';
      }else{
        this.passwordShown = true;
        this.passwordType = 'text';
        this.iconeye = 'eye-off';
      }
        
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  login(): void {
    if ( this.formInput.valid) {
      const credentials: CheckCredentialDto = {
        email: this.formInput.value.email,
        password: this.formInput.value.password
      };
      this.authService.postAuthLogin(credentials).toPromise().then(
        (token: TokenDto) => {
          this.cookieSrv.setItem('token', token.access_token);
          const tokens = this.cookieSrv.getItem('token');
          // decode the token to get its payload
          const tokenPayload = decode(tokens);

          if (tokenPayload['role'] === 'Admin') { this.tabPage() } else { this.tabPage() }
          this.formInput.reset();
        },
        error => this.presentToast(error.status === 401 ? error.error.message : 'Email incorrect.')
      );
    } else {
      this.presentToast('Vous devez remplir tous les champs.')
    }

  }

  signup(){
    this.router.navigateByUrl('/sigunp');
  }

}
