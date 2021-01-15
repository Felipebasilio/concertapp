import { MatGridListModule } from '@angular/material/grid-list';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.sass']
})
export class ShelterComponent implements OnInit {

  constructor() { }

  loaded = false;

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true;
    }, 1000);
  }

}
