import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsModifyComponent } from './brands-modify.component';

describe('BrandsModifyComponent', () => {
  let component: BrandsModifyComponent;
  let fixture: ComponentFixture<BrandsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
