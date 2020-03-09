import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor() { }

  sliderConfig = {
    spaceBetween : 11,
    centeredSlides: true,
    slidesPerView: 1.1
  };

  ngOnInit() {
  }

}
