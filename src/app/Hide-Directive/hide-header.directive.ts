import { Directive, Input, ElementRef, Renderer2, OnInit, ViewChild } from "@angular/core";
import { DomController } from "@ionic/angular";

@Directive({
  selector: "[appHideHeader]",
})
export class HideHeaderDirective implements OnInit {
  @Input("appHideHeader") scrollArea: { ionScroll: { subscribe: (arg0: (scrollEvent: any) => void) => void; }; };
  @ViewChild("searchBar", {read : ElementRef, static :true})  searchBar : ElementRef;

  private hidden: boolean = false;
  private triggerDistance: number = 25;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private domCtrl: DomController
  ) {}

  ngOnInit() {
    this.initStyles();

    this.scrollArea.ionScroll.subscribe(scrollEvent => {
      let delta = scrollEvent.detail.deltaY;

      if (scrollEvent.detail.currentY === 0 && this.hidden) {
        this.show();
      } else if (!this.hidden && delta > this.triggerDistance) {
        this.hide();
      } else if (this.hidden && delta < -this.triggerDistance) {
        this.show();
      }
    });
  }

  initStyles() {
    this.domCtrl.write(() => {
      this.renderer.setStyle(
        this.element.nativeElement,
        "transition",
        "0.2s",
      );
    });
  }

  hide() {
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.element.nativeElement, "transform", "translateY(-60px)");
      this.renderer.setStyle(
        this.element.nativeElement,
        "transition",
        "0.2s",
      );
      document.getElementById('searchBar').style.transform = "translateY(-60px)";
      document.getElementById('searchBar').style.transition = "0.2s";
    });

    this.hidden = true;
  }


  show() {
    this.domCtrl.write(() => {
      document.getElementById('searchBar').style.transform = "translateY(0px)";
      this.renderer.setStyle(this.element.nativeElement, "height", "auto");
      this.renderer.removeStyle(this.element.nativeElement, "min-height");
      this.renderer.removeStyle(this.element.nativeElement, "padding");
      this.renderer.setStyle(this.element.nativeElement, "margin-top", "0px");
      this.renderer.setStyle(this.element.nativeElement, "transform", "translateY(0px)");
      document.getElementById('searchBar').style.transition = "0.2s";
      this.renderer.setStyle(
        this.element.nativeElement,
        "transition",
        "0.2s",
      );
    });

    this.hidden = false;
  }
}
