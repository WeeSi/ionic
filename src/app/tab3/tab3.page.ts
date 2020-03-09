import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../search/search.page';
import { IonInfiniteScroll } from '@ionic/angular';
import { MedecinPage } from '../medecin/medecin.page';
import { PatientPage } from '../patient/patient.page';

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
export class Tab3Page {
  @ViewChild(IonInfiniteScroll, {static: false} ) infiniteScroll: IonInfiniteScroll;

  constructor(public modalController: ModalController) {}

  patient: patient[] = [
    {
        firstname: 'Ehui',
        lastname:  'Franck',
        spec: 'Etudiant',
        img: 'picture_1558954558086.jpg',
        id: 1,
        age:27,
        role:'patient'
    },
    {
        firstname: 'Alexis',
        lastname:  'Brossette',
        img: 'durant.jpg',
        id: 2,
        age:31,
        role:'patient'
    },
    {
        firstname: 'Nohwa ',
        lastname:  'Hamadi',
        img: 'fultz.jpg',
        id: 3,
        age:21
    },
    {
        firstname: 'Clara',
        lastname:  'Gianitelli',
        img: 'lebron.jpg',
        id: 4,
        age:34
    },
    {
        firstname: 'Elvia',
        lastname:  'Gianitelli',
        img: 'paul.jpg',
        id: 5,
        age:34
    },

    {
        firstname: 'Stephine',
        lastname:  'Bonneton',
        img: 'morant.jpg',
        id: 6,
        age:20
    },

    {
      firstname: 'Laura',
      lastname:  'Bonneton',
      img: 'morant.jpg',
      id: 7,
      age:20
  },

  {
    firstname: 'Ja',
    lastname:  'Morant',
    spec: 'Basketteur',
    img: 'morant.jpg',
    id: 8,
    age:20
},

{
  firstname: 'Wendy',
  lastname:  'Gonno',
  img: 'morant.jpg',
  id: 9,
  age:20
},

{
  firstname: 'Sarah',
  lastname:  'Ribero',
  img: 'morant.jpg',
  id: 11,
  age:20
},

{
  firstname: 'Cedric',
  lastname:  'Beyer',
  img: 'morant.jpg',
  id: 12,
  age:20
},

{
  firstname: 'Ja',
  lastname:  'Morant',
  img: 'morant.jpg',
  id: 13,
  age:20
},

  ];

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
          medecinsList: this.patient,
          name :'patients'
      }
    });

    return await modal.present();
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
    
    if (this.patient.length == 1000) {
      event.target.disabled = true;
    }
  }, 500);
}

toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}
}
