import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDto } from '../api/models/user-dto';
import { UserService } from '../api/services/user.service';
import { RoleEnum } from 'src/app/enum/role.enum';
import { GenderEnum } from 'src/app/enum/gender.enum';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.page.html',
  styleUrls: ['./user-personal-info.page.scss'],
})
export class UserPersonalInfoPage implements OnInit {

  constructor(
    public modalController: ModalController,
    public userService: UserService
    ) { }

    roles: string[] = Object.keys(RoleEnum).filter((v) => isNaN(+v));
    genders: string[] = Object.keys(GenderEnum).filter((v) => isNaN(+v));

    private UserDto: UserDto[] = [];

  ngOnInit() {
    this.userService.getUserMe().subscribe(user => {this.UserDto.push(user)});
  }

  close(){
    this.modalController.dismiss();
  }

}
