import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTripComponent } from './delete-trip.component';

describe('DeleteTripComponent', () => {
  let component: DeleteTripComponent;
  let fixture: ComponentFixture<DeleteTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
