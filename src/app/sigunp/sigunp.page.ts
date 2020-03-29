import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleEnum } from 'src/app/enum/role.enum';
import { GenderEnum } from 'src/app/enum/gender.enum';
import { CreateUserDto } from 'src/app/api/models/create-user-dto';
import { AuthService } from 'src/app/api/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { CookieService } from '@ngx-toolkit/cookie';


@Component({
  selector: 'app-sigunp',
  templateUrl: './sigunp.page.html',
  styleUrls: ['./sigunp.page.scss'],
})
export class SigunpPage implements OnInit {


  formInput: FormGroup;
  private url = 'http://localhost:3000/api/avatar';
  fileToUpload: File = null;
  filename: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  roles: string[] = Object.keys(RoleEnum).filter((v) => isNaN(+v));
  genders: string[] = Object.keys(GenderEnum).filter((v) => isNaN(+v));

  constructor(
    private http: HttpClient,
    private router: Router, 
    private nativePageTransitions : NativePageTransitions,
    private formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly cookieSrv: CookieService,
    public toastController: ToastController,
    private _formBuilder: FormBuilder
  ) {
    this.formInput = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
      role: ['', Validators.required],
      gender: ['', Validators.required],
      adresse: ['', Validators.required],
      image: ['']
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
   }
   
  back(){
    this.router.navigate(['login']);
  }

   async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.filename = this.fileToUpload.name;
  }

   signup(): void {
    if (this.formInput.valid) {
      // tslint:disable-next-line: one-variable-per-declaration
      const userToCreate: CreateUserDto = {
        email: this.formInput.value.email,
        password: this.formInput.value.password,
        firstName: this.formInput.value.firstname,
        lastName: this.formInput.value.lastname,
        address: this.formInput.value.adresse,
        role: this.formInput.value.role,
        gender: this.formInput.value.gender,
        image: this.filename
      };
      this.authService.putAuthSignup(userToCreate).toPromise().then(
        () => {
          if(this.formInput.value.image){
            // tslint:disable-next-line: new-parens
            const formData = new FormData;
            formData.append('file', this.fileToUpload, this.filename);
            this.http.post(this.url, formData)
              .subscribe(res => {
                console.log(res);
              });
          }
          this.presentToast('Votre compte à crée');
          this.formInput.reset();
          this.router.navigate(['login']);
        },
        error => this.presentToast(error.error.message)
      );
    } else {
      this.presentToast('Renseigner les champs sans erreur.');
    }
    }

  ngOnInit() {
  }

}
