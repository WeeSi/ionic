import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.storage.get('theme').then((val) => {
      document.body.classList.add(val);
    });
  }
  constructor(
    private storage: Storage
  ) {
  }

}
