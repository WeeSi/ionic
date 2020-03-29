import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/services/user.service';
import { UserDto } from '../api/models/user-dto';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  private UserDto: UserDto[] = [];
  constructor(public userService: UserService) { }

  sliderConfig = {
    spaceBetween : 11,
    centeredSlides: true,
    slidesPerView: 1.1
  };

  ngOnInit() {
    this.userService.getUserMe().subscribe(user => {this.UserDto.push(user)});
    
  }

}
