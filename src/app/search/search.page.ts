import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { MedecinPage } from '../medecin/medecin.page';
import { PatientPage } from '../patient/patient.page';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('input', {static: false}) myInput: any ;
  @Input() medecinsList: any;
  @Input() name:any;

  public searchControl: FormControl;
  public items: any;

  constructor(public modalController: ModalController) { 
    this.searchControl = new FormControl();
  }

  close() {
    this.modalController.dismiss();
  }

  async openMedecin(list: any) {
    const modal = await this.modalController.create({
      component : MedecinPage,
       componentProps: { 
      test:list,
    }
    });

    return await modal.present();
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

  ngOnInit() {

    
    this.setFilteredItems("");

    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(search => {
        this.setFilteredItems(search);
      });
  }

  ngAfterViewChecked() {
    this.myInput.setFocus()
  }

  setFilteredItems(searchTerm: string) {
    this.items = this.filterItems(searchTerm);
  }

   filterItems(searchTerm: string) {
     if (searchTerm != "") {
      return this.medecinsList.filter((item: { firstName: string; lastName: string; }) => {
        const searchFirstnameFirst = 'dr' + " " + item.firstName + " " + item.lastName;

        const searchLastnameFirst = 'dr' + " " + item.firstName + " " + item.lastName;
        // tslint:disable-next-line: max-line-length
        return searchFirstnameFirst.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || searchLastnameFirst.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
     }

  }

}
