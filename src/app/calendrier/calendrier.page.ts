import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DatePipe } from '@angular/common'
registerLocaleData(localeFr, 'Fr');

export interface DataDate{
  slot:string;
}

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.page.html',
  styleUrls: ['./calendrier.page.scss'],
})
export class CalendrierPage implements OnInit {

  constructor(public modalController: ModalController, public datepipe: DatePipe) {

   }

  @Input() test: any;
  time: string;
  date: any;

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'M',
    currentDate: this.selectedDay,
  };

  hours = [
    { slot : '9:00'},
    { slot : '9:30'},
    { slot : '10:00'},
    { slot : '10:30'},
    { slot : '11:00'},
    { slot : '11:30'},
    { slot : '12:00'},
    { slot : '14:00'},
    { slot : '14:30'},
    { slot : '15:00'},
    { slot : '15:30'},
    { slot : '16:00'},
    { slot : '16:30'},
    { slot : '17:00'},
    ];

    displayhours = [];

  ngOnInit() {
  }

  onViewTitleChanged(title: string) {
    this.viewTitle = title;
  }

  onTimeSelected(ev: any) {
  const date = this.datepipe.transform(ev.selectedTime, 'yyyy-MM-dd');
  this.date = date;

  const data :DataDate[] = [
    { slot : '11:30'},
    { slot : '12:00'},
    { slot : '14:00'},
    { slot : '14:00'},
    { slot : '10:30'},
    { slot : '17:00'}
  ];

  if (data.length !== 0) {
    // tslint:disable-next-line: prefer-const
    // tslint:disable-next-line: variable-name
    const filteredArray  = this.hours.filter(function(array_el){
      // tslint:disable-next-line: only-arrow-functions
      return data.filter(function(anotherOne_el){
         return anotherOne_el.slot == array_el.slot;
      }).length == 0;
   });
    this.displayhours = filteredArray;
} else {
    this.displayhours = this.hours;
  }

  }

  onEventSelected(event) {
    console.log(event);
  }

  AddAppointment() {
    console.log(this.time);
    console.log(this.date);
    }

  onCurrentDateChanged() {

  }

  close() {
    this.modalController.dismiss();
  }

}
