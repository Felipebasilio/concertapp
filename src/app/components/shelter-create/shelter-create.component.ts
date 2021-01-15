import { ShelterService } from './shelter.service';
import { Router } from '@angular/router';
import { Shelter } from './shelter.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


declare const L: any;

@Component({
  selector: 'app-shelter-create',
  templateUrl: './shelter-create.component.html',
  styleUrls: ['./shelter-create.component.sass']
})
export class ShelterCreateComponent implements OnInit {

  
  myForm: FormGroup;
  
  adressToPlot = '';
  
  loaded = false;
  
  constructor(private fb: FormBuilder,
    private router: Router, 
    private shelterService: ShelterService) { }
    
    ngOnInit(): void {
      setInterval(() => {
        this.loaded = true;
      }, 1000);
      
      this.myForm = this.fb.group({
        ownerName: ['', [
          Validators.required
        ]],
        businessName: ['', [
          Validators.required
        ]],
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        phone: ['', [
          Validators.required
        ]],
        adress: ['', [
          Validators.required
        ]],
        shelterTo: ['', [
          Validators.required
        ]],
      });
      

      if (!navigator.geolocation) {
        console.log('location is not supported');
      }
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = position.coords;
        const latLong = [coords.latitude, coords.longitude];
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );

        var mymap = L.map('map').setView(latLong, 13);
  
        L.tileLayer(
          'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmVsaXBlYmFzaWxpbyIsImEiOiJja2p4dnFvM3kwN21iMm9wNDl6bG5peTYyIn0.6lDn3QjlDyKxZ9wHT-XO5Q',
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token',
          }
        ).addTo(mymap);
  
        let marker = L.marker(latLong).addTo(mymap);
  
        let popup = L.popup()
          .setLatLng(latLong)
          .setContent('Você está aqui!')
          .openOn(mymap);
      });
      this.watchPosition();
      
    }

    watchPosition() {
      let desLat = 0;
      let desLon = 0;
      let id = navigator.geolocation.watchPosition(
        (position) => {
          console.log(
            `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
          );
          if (position.coords.latitude === desLat) {
            navigator.geolocation.clearWatch(id);
          }
        },
        (err) => {
          console.log(err);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
    
    
    shelter: Shelter = {
      ownerName: '',
      businessName: '',
      email: '',
      phone: '',
      adress: '',
      shelterTo: ''
    }
    
  
  createShelter(): void {
    this.shelterService.create(this.myForm.value).subscribe(() => {
      this.shelterService.showMessage('Produto criado!')
      this.router.navigate(['/shelter'])
      // colocar aqui a tela de loading
    })

  }

  cancel(): void {
    this.router.navigate(['/shelter'])
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

}


