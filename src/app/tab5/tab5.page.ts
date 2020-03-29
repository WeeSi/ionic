import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';
import { Storage } from '@ionic/storage';
import { ActionSheetController, ModalController, AlertController } from '@ionic/angular';
import { UserPersonalInfoPage } from '../user-personal-info/user-personal-info.page';
import { Router } from '@angular/router';
import { UserService } from '../api/services/user.service';
import { UserDto } from '../api/models/user-dto';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {


  constructor(private storage: Storage, 
              private themeDetection: ThemeDetection,
              public actionSheetController: ActionSheetController,
              public modalController: ModalController,
              private router: Router,
              public alertController : AlertController,
              public userService: UserService,
              private readonly authservice: AuthService,
                ) { 
               
}

private UserDto: UserDto[] = [];

  ngOnInit() {
    this.userService.getUserMe().subscribe(user => {this.UserDto.push(user), console.log(user)});
  }
loginPage(){
  this.authservice.logout();
}
  toggleDarkTheme() {
   document.body.classList.add('dark');
   this.storage.set('theme','dark');
  }

  toggleLightTheme() {
    document.body.classList.remove('dark');
    this.storage.set('theme','light');
  }

  toggleSytemeDefault(){
    this.themeDetection.isAvailable()
  .then((res: ThemeDetectionResponse) => {
     if(res.value) {
       this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
         if(res.value = true){
          document.body.classList.add('dark');
          this.storage.set('theme','dark');
         }
       })
     }
  });

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Thème de l\'application',
      buttons: [{
        text: 'Clairement blanc',
        handler: () => {
          this.toggleLightTheme()
        }
      }, {
        text: 'Un peu sombre',
        handler: () => {
        this.toggleDarkTheme()
        }
      }, {
        text: 'Thème du système',
        handler: () => {
         this.toggleSytemeDefault()
        }
      }]
    });
    await actionSheet.present();
  }

  async openPersonal(){
    const modal = await this.modalController.create({
      component : UserPersonalInfoPage
    });

    return await modal.present();
}

async presentAlert() {
  const alert = await this.alertController.create({
    message: 'Êtes-vous sûr de vouloir vous déconnecter?',
    buttons: [{
      text: 'Annuler'
    },
    {
      text: 'Déconnexion',
      handler: () => {
      this.loginPage()
      }
    }
  ]
  });

  await alert.present();
}


}
