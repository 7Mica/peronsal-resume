import { trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  fadeInOutTransition,
  scaleAndOpaque,
} from '@core/animations/common-animations';
import { validateAllFormFields } from '@core/functions/validate-all-form-fields';
import {
  IHobby,
  IHobbyData,
  IHobbyInterchange,
} from '@core/interfaces/hobby.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'admin-hobby-list',
  templateUrl: 'hobby-list.component.html',
  styleUrls: ['hobby-list.component.scss'],
  animations: [
    trigger('collapse', fadeInOutTransition),
    trigger('hobbyAction', scaleAndOpaque),
  ],
})
export class HobbyListComponent implements OnChanges {
  @Input()
  public hobbyList: IHobbyData[] = [];

  @Output()
  public addedHobby = new EventEmitter<IHobbyInterchange>();

  @Output()
  public removedHobby = new EventEmitter<string>();

  public hobbyForm: FormGroup;
  public ckEditor = ClassicEditor;
  public isBeingDragged = { index: 0, displayed: true };

  constructor(private fb: FormBuilder) {
    this.hobbyForm = fb.group({
      hobbiesFormArray: fb.array([]),
    });
  }

  ngOnChanges({ hobbyList: { currentValue } }: SimpleChanges): void {
    this.hobbies.clear();

    if (currentValue.length > 0) {
      currentValue.forEach((hobby: IHobby) =>
        this.hobbies.push(this.newHobbyFormGroup(false))
      );

      this.hobbies.patchValue(currentValue);
    }
  }

  public collapseAndExpandHobby(index: number): void {
    const expandedValue = !this.hobbies.at(index).get('expanded')?.value;

    this.hobbies.at(index).get('expanded')?.setValue(expandedValue);
  }

  public deleteHobbyFromHobbyFormArray(index: number): void {
    this.removedHobby.emit(this.hobbies.at(index).get('id')?.value);
    this.hobbies.removeAt(index);
  }

  get hobbies(): FormArray {
    return this.hobbyForm.get('hobbiesFormArray') as FormArray;
  }

  public newHobbyFormGroup(isNewHobby: boolean): FormGroup {
    return this.fb.group({
      id: [uuidv4(), [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      imagehd: ['', [Validators.required]],
      weight: [0, [Validators.required]],
      expanded: [false],
      isNew: [isNewHobby],
    });
  }

  public sendAddedHobby(i: number): void {
    if (this.hobbies.at(i).invalid) {
      validateAllFormFields(this.hobbies.at(i) as FormGroup);

      return;
    }

    const { expanded, ...finalFormValue } = this.hobbies.at(i).value;
    this.addedHobby.emit({
      data: finalFormValue,
      index: this.hobbies.at(i).get('id')?.value,
    });
    this.hobbies.at(i).markAsPristine();
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

    const newItem = this.hobbies.at(itemToReplace);
    this.hobbies.removeAt(itemToReplace);
    this.hobbies.insert(formGroupIndex, newItem);
    this.refreshWeight();
  }

  public dragOverHandler(event: any): void {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  private refreshWeight(): void {
    this.hobbies.controls.forEach(
      (formGroup: AbstractControl, index: number) => {
        formGroup.get('weight')?.setValue(index);
        this.sendAddedHobby(index);
      }
    );
  }
}
