import { ShelterCreateComponent } from './components/shelter-create/shelter-create.component';
import { ShelterComponent } from './components/shelter/shelter.component';
import { UserComponent } from './components/user/user.component';

import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: UserComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "shelter",
    component: ShelterComponent
  },
  {
    path: "shelter/create",
    component: ShelterCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
