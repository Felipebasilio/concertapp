import { Shelter } from './../shelter-create/shelter.model';
import { ShelterService } from './../shelter-create/shelter.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shelter-read',
  templateUrl: './shelter-read.component.html',
  styleUrls: ['./shelter-read.component.sass']
})
export class ShelterReadComponent implements OnInit {

  shelter: Shelter[] = []
  displayedColumns = ['id', 'ownerName','businessName', 
  'email', 'phone', 'adress']

  constructor(private shelterService: ShelterService) { 
    this.shelter = []
  }

  ngOnInit(): void {
    this.shelterService.read().subscribe(shelter => {
      this.shelter = shelter
      console.log(shelter)
    })
  }

}
