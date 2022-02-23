import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeaderService } from 'src/app/components/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly headerService: HeaderService
  ) {
    this.headerService.headerData = {
      title: "Produtos",
      icon: "storefront",
      routeUrl: "/products"
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
