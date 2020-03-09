import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DatePipe } from '@angular/common'
registerLocaleData(localeFr, 'Fr');



@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.page.html',
  styleUrls: ['./calendrier.page.scss'],
})
export class CalendrierPage implements OnInit {

  @Input() test: any;
  time: string;
  date: any;
  
  constructor(public modalController : ModalController,public datepipe: DatePipe) {

   }
  
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay,
  }

  data = [    
  { slot : '11:30', reserved:false },
  { slot : '12:00', reserved:false },
  { slot : '14:00', reserved:false }
];



  hours = [
    { slot : '9:00', reserved:false },
    { slot : '9:30', reserved:false },
    { slot : '10:00', reserved:false },
    { slot : '10:30', reserved:false },
    { slot : '11:00', reserved:false },
    { slot : '11:30', reserved:false },
    { slot : '12:00', reserved:false },
    { slot : '14:00', reserved:false },
    { slot : '14:30', reserved:false },
    { slot : '15:00', reserved:false },
    { slot : '15:30', reserved:false },
    { slot : '16:00', reserved:false },
    { slot : '16:30', reserved:false },
    { slot : '17:00', reserved:false },
    ];

  ngOnInit() {
  }

    displayhours = [];

  onViewTitleChanged(title: string){
    this.viewTitle = title;
  }

  onTimeSelected(ev: any){
  let date = this.datepipe.transform(ev.selectedTime, 'yyyy-MM-dd');
  this.date = date;

  if (this.data.length !== 0) {
  for (var i = 0; i < this.data.length; i++) {
    for (var j = 0; j < this.hours.length; j++) {
      if (this.data[i].slot == this.hours[j].slot) {
        this.displayhours[i] = this.data[i]; 
      }
    }
  }
}else{
    this.displayhours = this.hours;
  }

  }

  onEventSelected(event){
    console.log(event);
  }

  AddAppointment(){
    console.log(this.time);
    console.log(this.date);
    }

  onCurrentDateChanged(){
    
  }

  close(){
    this.modalController.dismiss();
  }

}
