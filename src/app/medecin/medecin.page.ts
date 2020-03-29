import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { ModalController, IonContent, NavParams } from '@ionic/angular';
import { CalendrierPage } from '../calendrier/calendrier.page';
import { PatientService } from '../../app/api/services/patient.service';


@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.page.html',
  styleUrls: ['./medecin.page.scss'],
})
export class MedecinPage implements OnInit {

  constructor(
    private modalController: ModalController, 
    private renderer: Renderer2,
    private NavParams : NavParams
  ) { }

@ViewChild('IonContent', {read : ElementRef, static : true})  contentArea: ElementRef;
@ViewChild('triggerElement', {read: ElementRef, static: true}) triggerElement: ElementRef;
@Input() test: any;
  private observer: IntersectionObserver;


 hours = [
  { slot : '9:00' },
  { slot : '9:30' },
  { slot : '10:00' },
  { slot : '10:30' },
  { slot : '11:00' },
  { slot : '11:30' },
  { slot : '12:00' },
  { slot : '14:00' },
  { slot : '14:30' },
  { slot : '15:00' },
  { slot : '15:30' },
  { slot : '16:00' },
  { slot : '16:30' },
  { slot : '17:00' },
  ];

  close() {
    this.modalController.dismiss();
  }

addClient(){

}

  ngOnInit() {
    console.log(this.test[this.NavParams.get('id')]);
    this.observer = new IntersectionObserver(entries => {

      entries.forEach((entry: any) => {
        if (screen.orientation.type === 'portrait-primary') {
          if (entry.isIntersecting) {
            // add transform, en gros on ajoute la classe no-transform
            // console.log('remove class');
            this.renderer.removeClass(this.contentArea.nativeElement, 'remove-transform');
          } else {
            // console.log('add class');
            // remove transform, en gros on enleve la classe no-transform
            this.renderer.addClass(this.contentArea.nativeElement, 'remove-transform');
          }
        } else if (screen.orientation.type === 'landscape-primary') {
          this.renderer.addClass(this.contentArea.nativeElement, 'remove-transform');

        }

      });
    });

    this.observer.observe(this.triggerElement.nativeElement);
   }

}
