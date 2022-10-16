import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPetsVetsComponent } from './all-pets-vets.component';

describe('AllPetsVetsComponent', () => {
  let component: AllPetsVetsComponent;
  let fixture: ComponentFixture<AllPetsVetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllPetsVetsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AllPetsVetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
