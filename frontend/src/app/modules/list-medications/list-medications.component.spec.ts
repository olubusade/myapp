import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MedicationsService } from 'src/app/services/medications.service';

import { ListMedicationsComponent } from './list-medications.component';

describe('ListMedicationsComponent', () => {
  let component: ListMedicationsComponent;
  let fixture: ComponentFixture<ListMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //This block tests if the instance of the list-medications component that is created is defined
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //In this block, the FormsModule is imported into the configure test.
  //This ensures the form’s related directives, such as ngModel, can be used.
  //
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ListMedicationsComponent]
    });
  });
//In this block, we test to ensure that the medication length is available to be used i.e. > 1
  it("should use the getMedications from the service", () => {
    const medicationsService = fixture.debugElement.injector.get(MedicationsService);
    fixture.detectChanges();
    expect(medicationsService.getMedications.length).toBeGreaterThanOrEqual(1);
  });
});
