import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {
  @ViewChild("IonContent", {read : ElementRef, static :true})  contentArea : ElementRef;
  @ViewChild("triggerElement",{read: ElementRef, static: true}) triggerElement: ElementRef;
  @Input() test: any;
    private observer: IntersectionObserver;
  
    constructor(public modalController: ModalController, private renderer : Renderer2) { }
  
    close(){
      this.modalController.dismiss();
    }
  
    
  
    ngOnInit() {
      this.observer = new IntersectionObserver(entries =>{
        
        entries.forEach((entry: any) => {
          if(screen.orientation.type == "portrait-primary"){
            if(entry.isIntersecting){
              //add transform, en gros on ajoute la classe no-transform 
              // console.log('remove class');
              this.renderer.removeClass(this.contentArea.nativeElement, "remove-transform");
  
            }else{
              // console.log('add class');
              //remove transform, en gros on enleve la classe no-transform
              this.renderer.addClass(this.contentArea.nativeElement, "remove-transform");            
            }
          }else if(screen.orientation.type == "landscape-primary"){
            this.renderer.addClass(this.contentArea.nativeElement, "remove-transform");
  
          }
  
        });
      });
      
      this.observer.observe(this.triggerElement.nativeElement);
     }

}
