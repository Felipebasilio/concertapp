import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.sass']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    specie: '',
    district: '',
    race: '',
    age: '',
    found: false,
    where_found: '',
    collar: false,
    owners_belongings: false,
    born_mark: false,
    mist_mark: false,
    when_found: ''
  }

  specie: boolean = true;
  // True -> Dog
  // False -> Cat

  was_found: boolean = false;

  constructor(private productService: ProductService,
    private router: Router) { }

  loaded = false;

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true;
    }, 1000);
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
      // colocar aqui a tela de loading
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])

  }

  specie_selected(animal: string): void {
    if(animal == "dog"){
      this.specie = true;
    }
    else{
      this.specie = false;
    }
  }
    
    wasfound(was: number): void {
      if(was == 1){
        this.was_found = true;
      }
      else{
        this.was_found = false;
      }
  }
}
