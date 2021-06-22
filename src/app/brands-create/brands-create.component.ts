import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BrandsService} from "../brands.service";

@Component({
  selector: 'app-brands-create',
  templateUrl: './brands-create.component.html',
  styleUrls: ['./brands-create.component.css']
})
export class BrandsCreateComponent implements OnInit {
  @Input() brand;
  errors: string = undefined;

  constructor(private brandService: BrandsService) { }

  ngOnInit(): void {
  }

  @Output() closeModal = new EventEmitter<string>();

  createBrand(values) {
    this.errors = undefined
    if (values.name == "" || values.description == ""){
      return this.errors = 'Tout les champs doivent être remplis'
    }
    this.brandService.createBrand(values).subscribe(() => {
      this.closeModal.next('closeModal')
    },
      () => {
      this.errors = "Erreur lors de la création de l'article."
    })
  }
}
