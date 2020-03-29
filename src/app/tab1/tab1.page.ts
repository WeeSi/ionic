import { Component, ViewChild, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MedecinPage } from '../medecin/medecin.page';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../search/search.page';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../api/services/user.service';
import { UserDto } from '../api/models/user-dto';


// tslint:disable-next-line: class-name
export interface medecinsList {
  firstname: string;
  lastname: string;
  spec: string;
  city?: string;
  img?: string;
  id?: number;
  age?: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false} ) infiniteScroll: IonInfiniteScroll;
  private UserDto: UserDto[] = [];
  private UsersDto: UserDto[] = [];
  private IsLoading =true;

  constructor(public modalController: ModalController,
              private element: ElementRef,
              private renderer: Renderer2,
              private formBuilder: FormBuilder,
              public userService: UserService) {}


  ngOnInit() {
    this.getDoctors();
    this.userService.getUserMe().subscribe(user => {this.UserDto.push(user), this.IsLoading=true});
    
  }

  getDoctors(){
    this.userService.getUserDoctors().subscribe(users => this.UsersDto = users as UserDto[]);
  }

  async openMedecin(list) {
      const modal = await this.modalController.create({
        component : MedecinPage,
         componentProps: { 
        test: list,
      }
      });

      return await modal.present();
  }

  removePracticien(id){
      this.userService.deleteUserId(id).subscribe( () => console.log('user deleted'));
      this.doRefresh(event);
  }

  async openSearch() {
    const modal = await this.modalController.create({
      component : SearchPage,
        componentProps: { 
          medecinsList: this.UsersDto,
          name :'mèdecins'
      }
    });

    return await modal.present();
}

doRefresh(event) {
  this.getDoctors();
  
  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}

loadData(event: { target: { complete: () => void; disabled: boolean; }; }) {
  setTimeout(() => {
    console.log('Done');
    event.target.complete();

    if (this.UsersDto.length == 1000) {
      event.target.disabled = true;
    }
  }, 500);
}

toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}

}
