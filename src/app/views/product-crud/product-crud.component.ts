import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.sass']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de animais para adoção',
      icon: 'storefront',
      routeUrl: '/products'
    }
   }

loaded = false;

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true;
    }, 500);
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

}
