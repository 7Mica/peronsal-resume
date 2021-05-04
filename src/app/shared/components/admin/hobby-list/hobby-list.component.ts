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
import {
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

  constructor(private fb: FormBuilder) {
    this.hobbyForm = fb.group({
      hobbiesFormArray: fb.array([]),
    });
  }

  ngOnChanges({ hobbyList: { currentValue } }: SimpleChanges): void {
    this.hobbies.clear();

    if (currentValue.length > 0) {
      for (const i of currentValue) {
        this.hobbies.push(this.newHobbyFormGroup(false));
      }

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
      id: this.fb.control(uuidv4(), [Validators.required]),
      name: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required]),
      expanded: this.fb.control(false),
      new: this.fb.control(isNewHobby),
    });
  }

  public sendAddedHobby(i: number): void {
    if (this.hobbies.at(i).pristine) {
      return;
    }

    this.addedHobby.emit({
      data: this.hobbies.at(i).value,
      index: this.hobbies.at(i).get('id')?.value,
    });
  }
}
