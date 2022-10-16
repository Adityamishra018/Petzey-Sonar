import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetDialogComponent } from './vet-dialog.component';

describe('VetDialogComponent', () => {
  let component: VetDialogComponent;
  let fixture: ComponentFixture<VetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VetDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
