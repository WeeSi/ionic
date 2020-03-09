import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordType : string = 'password';
  passwordShown: boolean = false;
  iconeye : string = 'eye';

  constructor(private router: Router, private nativePageTransitions : NativePageTransitions) { }

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

}
