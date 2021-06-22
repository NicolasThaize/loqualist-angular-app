import { Component, OnInit } from '@angular/core';
import {BrandsService} from "../brands.service";

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brandList = undefined;
  isModalShown = false;
  selectedBrand = this.resetBrand();
  loading = false;
  errors: string = undefined;

  constructor(private brandsService: BrandsService) { }

  ngOnInit(): void {
    this.getAllBrands()
  }

  getAllBrands() {
    this.loading = true
    this.brandsService.getBrands().subscribe((res) => {
      this.brandList = res
      this.loading = false
    },() => {
      this.errors = "Erreur lors du chargement des l'articles."
    })
  }

  resetBrand(){
    return this.selectedBrand = {name: undefined, description: undefined}
  }

  create(){
    this.resetBrand()
    this.triggerModal()
  }

  modify(brand){
    this.selectedBrand = brand
    this.triggerModal()
  }

  delete(brand){
    this.brandsService.deleteBrand(brand.id).subscribe(() => {
      this.getAllBrands()
    }, () => {
      this.errors = "Erreur lors de la suppression de l'article."
    })
  }

  triggerModal(){
    if (this.isModalShown){
      this.getAllBrands()
    }
    this.isModalShown = !this.isModalShown
  }

}
