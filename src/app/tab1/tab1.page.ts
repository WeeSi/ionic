import { Component, ViewChild, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MedecinPage } from '../medecin/medecin.page';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../search/search.page';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(public modalController: ModalController,
              private element: ElementRef,
              private renderer: Renderer2,
              private formBuilder: FormBuilder) {}

  medecinsList: medecinsList[] = [
    {
        firstname: 'Kyrie',
        lastname:  'Irving',
        spec: 'Allergologue',
        city: 'Lyon',
        img: 'kyrie.jpg',
        id: 1,
        age: 27
    },
    {
        firstname: 'Kevin',
        lastname:  'Durant',
        spec: 'Rhumatologie',
        city: 'Lyon',
        img: 'durant.jpg',
        id: 2,
        age: 31
    },
    {
        firstname: 'Markell',
        lastname:  'Fultz',
        spec: 'Cytologie ',
        city: 'Lyon',
        img: 'fultz.jpg',
        id: 3,
        age: 21
    },
    {
        firstname: 'Lebron',
        lastname:  'James',
        spec: 'Hématologie',
        city: 'Lyon',
        img: 'lebron.jpg',
        id: 4,
        age: 34
    },
    {
        firstname: 'Chris',
        lastname:  'Paul',
        spec: 'Psychiatrie',
        city: 'Lyon',
        img: 'paul.jpg',
        id: 5,
        age: 34
    },

    {
        firstname: 'Ja',
        lastname:  'Morant',
        spec: 'Infectiologie',
        city: 'Lyon',
        img: 'morant.jpg',
        id: 6,
        age: 20
    },

    {
      firstname: 'Ja',
      lastname:  'Morant',
      spec: 'Infectiologie',
      city: 'Lyon',
      img: 'morant.jpg',
      id: 7,
      age: 20
  },

  {
    firstname: 'Ja',
    lastname:  'Morant',
    spec: 'Infectiologie',
    city: 'Lyon',
    img: 'morant.jpg',
    id: 8,
    age: 20
},

{
  firstname: 'Ja',
  lastname:  'Morant',
  spec: 'Infectiologie',
  city: 'Lyon',
  img: 'morant.jpg',
  id: 9,
  age: 20
},

{
  firstname: 'Ja',
  lastname:  'Morant',
  spec: 'Infectiologie',
  city: 'Lyon',
  img: 'morant.jpg',
  id: 11,
  age:20
},

{
  firstname: 'Ja',
  lastname:  'Morant',
  spec: 'Infectiologie',
  city: 'Lyon',
  img: 'morant.jpg',
  id: 12,
  age:20
},

{
  firstname: 'Ja',
  lastname:  'Morant',
  spec: 'Infectiologie',
  city: 'Lyon',
  img: 'morant.jpg',
  id: 13,
  age:20
},

{
  firstname: 'Ja',
  lastname:  'Morant',
  spec: 'Infectiologie',
  city: 'Lyon',
  img: 'morant.jpg',
  id: 14,
  age:20
},

{
  firstname: 'Ja',
  lastname:  'Morant',
  spec: 'Infectiologie',
  city: 'Lyon',
  img: 'morant.jpg',
  id: 15,
  age:20
},

{
  firstname: 'Ja',
  lastname:  'Morant',
  spec: 'Infectiologie',
  city: 'Lyon',
  img: 'morant.jpg',
  id: 16,
  age:20
},

  ];

  private form : FormGroup;

  ngOnInit() {
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

  async openSearch() {
    const modal = await this.modalController.create({
      component : SearchPage,
        componentProps: { 
          medecinsList: this.medecinsList,
          name :'mèdecins'
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

    if (this.medecinsList.length == 1000) {
      event.target.disabled = true;
    }
  }, 500);
}

toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}

}
