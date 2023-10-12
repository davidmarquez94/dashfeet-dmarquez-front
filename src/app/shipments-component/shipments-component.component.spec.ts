import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsComponentComponent } from './shipments-component.component';

describe('ShipmentsComponentComponent', () => {
  let component: ShipmentsComponentComponent;
  let fixture: ComponentFixture<ShipmentsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentsComponentComponent]
    });
    fixture = TestBed.createComponent(ShipmentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
