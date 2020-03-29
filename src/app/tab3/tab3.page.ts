import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SearchPage } from '../search/search.page';
import { IonInfiniteScroll } from '@ionic/angular';
import { MedecinPage } from '../medecin/medecin.page';
import { PatientPage } from '../patient/patient.page';
import { UserDto } from '../api/models/user-dto';
import { UserService } from '../api/services/user.service';

// tslint:disable-next-line: class-name
export interface patient {
  firstname: string;
  lastname: string;
  spec?: string;
  city?: string;
  img: string;
  id: number;
  age:number;
  role?:string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false} ) infiniteScroll: IonInfiniteScroll;
  private UserDto: UserDto[] = [];
  constructor(
    public modalController: ModalController,
    public userService: UserService,
    private navCtrl : NavController
    ) {}

    commercials: UserDto[] = [];

  ngOnInit(): void {
        this.userService.getUserMe().subscribe(user => {this.UserDto.push(user)});
  }

  getCommercial(){
    this.userService.getUserCommercials().subscribe(comemrcials =>this.commercials = comemrcials as UserDto[])
  }

  async openPatient(list: any) {
      const modal = await this.modalController.create({
        component : PatientPage,
         componentProps: { 
        test:list,
      }
      });

      return await modal.present();
  }

  async openSearch() {
    const modal = await this.modalController.create({
      component : SearchPage,
        componentProps: { 
          medecinsList: this.commercials,
          name :'patients'
      }
    });

    return await modal.present();
}

removeCommercial(id){
  this.userService.deleteUserId(id).subscribe( () => console.log('user deleted'));
this.ionViewWillEnter();
}

ionViewWillEnter() {
  this.getCommercial();
}

doRefresh(event) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}

loadData(event: { target: { complete: () => void; disabled: boolean; }; }) {
  setTimeout(() => {
    console.log('Done');
    event.target.complete();
    
    if (this.commercials.length == 1000) {
      event.target.disabled = true;
    }
  }, 500);
}

toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}
}
