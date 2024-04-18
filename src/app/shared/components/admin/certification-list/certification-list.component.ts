import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeInOutTransition, scaleAndOpaque } from '@core/animations/common-animations';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICertificationData, ICertificationInterchange } from '@core/interfaces/certification.interface';
import { ICareer } from '@core/interfaces/career.interface';
import { v4 as uuidv4 } from 'uuid';
import { CertificationStatusEnum } from '@core/enums/certification-status.enum';
import { validateAllFormFields } from '@core/functions/validate-all-form-fields';

@Component({
  selector: 'admin-certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss'],
  animations: [
    trigger('collapse', fadeInOutTransition),
    trigger('certificationAction', scaleAndOpaque),
  ],
})
export class CertificationListComponent implements OnChanges {
  @Input()
  public certificationList: ICertificationData[] = [];

  @Output()
  public addedCertification = new EventEmitter<ICertificationInterchange>();

  @Output()
  public removedCertification = new EventEmitter<string>();

  public certificationForm: FormGroup;
  public isBeingDragged = { index: 0, displayed: true };

  constructor(private fb: FormBuilder) {
    this.certificationForm = fb.group({
      certificationsFormArray: fb.array([]),
    });
  }

  ngOnChanges({ certificationList: { currentValue } }: SimpleChanges): void {
    this.certifications.clear();

    if (currentValue.length > 0) {
      currentValue.forEach((career: ICareer) =>
        this.certifications.push(this.newCertificationFormGroup(false))
      );

      this.certifications.patchValue(currentValue);
    }
  }

  public newCertificationFormGroup(isNewCareer: boolean): FormGroup {
    return this.fb.group({
      id: [uuidv4(), [Validators.required]],
      certificationUrl: ['', [Validators.required]],
      certificationImageUrl: ['', [Validators.required]],
      certificationDescription: ['', [Validators.required]],
      certificationCode: ['', [Validators.required]],
      weight: [0, [Validators.required]],
      status: [CertificationStatusEnum.IN_PROGRESS, [Validators.required]],
      isNew: [isNewCareer],
      expanded: [false],
    });
  }

  get certifications(): FormArray {
    return this.certificationForm.get('certificationsFormArray') as FormArray;
  }

  public sendAddedCertification(i: number): void {
    if (this.certifications.at(i).invalid) {
      validateAllFormFields(this.certifications.at(i) as FormGroup);

      return;
    }

    const { expanded, ...finalFormValue } = this.certifications.at(i).value;
    this.addedCertification.emit({
      data: finalFormValue,
      index: this.certifications.at(i).get('id')?.value,
    });
    this.certifications.at(i).markAsPristine();
  }

  public dragHandler(formGroupIndex: number): void {
    this.isBeingDragged = { index: formGroupIndex, displayed: false };
  }

  public dragEndHandler(formGroupIndex: number): void {
    this.isBeingDragged = { index: formGroupIndex, displayed: true };
  }

  public dragStartsHandler(event: any, formGroupIndex: number): void {
    event.dataTransfer.setData('text/plain', formGroupIndex);
    event.dataTransfer.effectAllowed = 'copy';
  }

  public dropHandler(event: any, formGroupIndex: number): void {
    const itemToReplace = parseInt(
      event.dataTransfer.getData('text/plain'),
      10
    );

    const newItem = this.certifications.at(itemToReplace);
    this.certifications.removeAt(itemToReplace);
    this.certifications.insert(formGroupIndex, newItem);
    // Change the weight
    this.refreshWeight();
  }

  public collapseAndExpandCertification(index: number): void {
    const expandedValue = !this.certifications.at(index).get('expanded')?.value;

    this.certifications.at(index).get('expanded')?.setValue(expandedValue);
  }

  public deleteCertificationFromCertificationFormArray(index: number): void {
    this.removedCertification.emit(this.certifications.at(index).get('id')?.value);
    this.certifications.removeAt(index);
  }

  public dragOverHandler(event: any): void {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  private refreshWeight(): void {
    this.certifications.controls.forEach(
      (formGroup: AbstractControl, index: number) => {
        formGroup.get('weight')?.setValue(index);
        this.sendAddedCertification(index);
      }
    );
  }
}
