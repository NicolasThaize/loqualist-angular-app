import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-brands-form',
  templateUrl: './brands-form.component.html',
  styleUrls: ['./brands-form.component.css']
})
export class BrandsFormComponent implements OnInit {
  @Input() brand;
  public form = undefined

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.brand.name),
      description: new FormControl(this.brand.description),
    })
  }

  @Output() someEvent = new EventEmitter<string>();


  sendToParent() {
    let finalData = this.form.getRawValue()
    finalData['id'] = this.brand.id
    this.someEvent.emit(finalData);
  }
}
