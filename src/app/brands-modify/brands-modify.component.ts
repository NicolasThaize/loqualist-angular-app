import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BrandsService} from "../brands.service";

@Component({
  selector: 'app-brands-modify',
  templateUrl: './brands-modify.component.html',
  styleUrls: ['./brands-modify.component.css']
})
export class BrandsModifyComponent implements OnInit {
  @Input() brand;
  errors: string = undefined;
  constructor(private brandsService: BrandsService) { }

  ngOnInit(): void {
  }

  @Output() closeModal = new EventEmitter<string>();

  updateBrand(values) {
    this.errors = undefined
    if (values.name == "" || values.description == ""){
      return this.errors = 'Tout les champs doivent être remplis'
    }
    this.brandsService.updateBrand(values).subscribe(() => {
      this.closeModal.next('closeModal')
    },
    () => {
      this.errors = "Erreur lors de la modification de l'article."
    })
  }
}
