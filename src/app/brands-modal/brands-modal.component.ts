import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-brands-modal',
  templateUrl: './brands-modal.component.html',
  styleUrls: ['./brands-modal.component.css']
})
export class BrandsModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() brand;
  @Input() isShown: boolean;
  @Input() type: string;
  @Output() someEvent = new EventEmitter<string>();

  closeModal(): void {
    this.someEvent.next('triggerModal');
  }
}
