import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.sass']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product

  specie: boolean = true;
  // True -> Dog
  // False -> Cat

  was_found: boolean = false;

  specie_selected(animal: string): void {
    if (animal == "dog") {
      this.specie = true;
    }
    else {
      this.specie = false;
    }
  }

  wasfound(was: number): void {
    if (was == 1) {
      this.was_found = true;
    }
    else {
      this.was_found = false;
    }
  }

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  loaded = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.product = product
    });

    setInterval(() => {
      this.loaded = true;
    }, 1000);
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(product => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);

    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
