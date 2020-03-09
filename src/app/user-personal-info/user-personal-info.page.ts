import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.page.html',
  styleUrls: ['./user-personal-info.page.scss'],
})
export class UserPersonalInfoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss();
  }

}
