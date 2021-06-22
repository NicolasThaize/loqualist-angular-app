import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsModalComponent } from './brands-modal.component';

describe('BrandsModifyComponent', () => {
  let component: BrandsModalComponent;
  let fixture: ComponentFixture<BrandsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
