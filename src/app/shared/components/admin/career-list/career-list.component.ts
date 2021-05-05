import { trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  fadeInOutTransition,
  scaleAndOpaque,
} from '@core/animations/common-animations';
import { validateAllFormFields } from '@core/functions/validate-all-form-fields';
import {
  ICareerData,
  ICareerInterchange,
} from '@core/interfaces/career.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'admin-career-list',
  templateUrl: 'career-list.component.html',
  styleUrls: ['career-list.component.scss'],
  animations: [
    trigger('collapse', fadeInOutTransition),
    trigger('careerAction', scaleAndOpaque),
  ],
})
export class CareerListComponent implements OnChanges {
  @Input()
  public careerList: ICareerData[] = [];

  @Output()
  public addedCareer = new EventEmitter<ICareerInterchange>();

  @Output()
  public removedCareer = new EventEmitter<string>();

  public careerForm: FormGroup;
  public ckEditor = ClassicEditor;

  constructor(private fb: FormBuilder) {
    this.careerForm = fb.group({
      careersFormArray: fb.array([]),
    });
  }

  ngOnChanges({ careerList: { currentValue } }: SimpleChanges): void {
    this.careers.clear();

    if (currentValue.length > 0) {
      for (const i of currentValue) {
        this.careers.push(this.newCareerFormGroup(false));
      }

      this.careers.patchValue(currentValue);
    }
  }

  get careers(): FormArray {
    return this.careerForm.get('careersFormArray') as FormArray;
  }

  public collapseAndExpandCareer(index: number): void {
    const expandedValue = !this.careers.at(index).get('expanded')?.value;

    this.careers.at(index).get('expanded')?.setValue(expandedValue);
  }

  public deleteCareerFromCareerFormArray(index: number): void {
    this.removedCareer.emit(this.careers.at(index).get('id')?.value);
    this.careers.removeAt(index);
  }

  public newCareerFormGroup(isNewCareer: boolean): FormGroup {
    return this.fb.group({
      id: [uuidv4(), [Validators.required]],
      companyName: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      jobTitle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      new: [isNewCareer],
      expanded: [false],
    });
  }

  public sendAddedCareer(i: number): void {
    if (this.careers.at(i).invalid) {
      validateAllFormFields(this.careers.at(i) as FormGroup);

      return;
    }

    this.addedCareer.emit({
      data: this.careers.at(i).value,
      index: this.careers.at(i).get('id')?.value,
    });
  }
}
