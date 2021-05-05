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
import {
  fadeInOutTransition,
  scaleAndOpaque,
} from '@core/animations/common-animations';
import {
  IAbilityData,
  IAbilityInterchange,
} from '@core/interfaces/ability.interface';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { v4 as uuidv4 } from 'uuid';
import { validateAllFormFields } from '@core/functions/validate-all-form-fields';

@Component({
  selector: 'admin-ability-list',
  templateUrl: 'ability-list.component.html',
  styleUrls: ['ability-list.component.scss'],
  animations: [
    trigger('collapse', fadeInOutTransition),
    trigger('abilityAction', scaleAndOpaque),
  ],
})
export class AbilityListComponent implements OnChanges {
  @Input()
  public abilityList: IAbilityData[] = [];

  @Output()
  public addedAbility = new EventEmitter<IAbilityInterchange>();

  @Output()
  public removedAbility = new EventEmitter<string>();

  public abilityForm: FormGroup;
  public ckEditor = ClassicEditor;
  public abilityListOptions = ['SKILL', 'LANGUAGE', 'OS', 'TOOL'];

  constructor(private fb: FormBuilder) {
    this.abilityForm = fb.group({
      abilitiesFormArray: fb.array([]),
    });
  }

  ngOnChanges({ abilityList: { currentValue } }: SimpleChanges): void {
    this.abilities.clear();

    if (currentValue.length > 0) {
      for (const i of currentValue) {
        this.abilities.push(this.newAbilityFormGroup(false));
      }

      this.abilities.patchValue(currentValue);
    }
  }

  get abilities(): FormArray {
    return this.abilityForm.get('abilitiesFormArray') as FormArray;
  }

  public collapseAndExpandAbility(index: number): void {
    const expandedValue = !this.abilities.at(index).get('expanded')?.value;

    this.abilities.at(index).get('expanded')?.setValue(expandedValue);
  }

  public deleteAbilityFromAbilityFormArray(index: number): void {
    this.removedAbility.emit(this.abilities.at(index).get('id')?.value);
    this.abilities.removeAt(index);
  }

  public newAbilityFormGroup(isNewAbility: boolean): FormGroup {
    return this.fb.group({
      id: [uuidv4(), [Validators.required]],
      logo: ['', [Validators.required]],
      percent: [
        1,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      abilityName: ['', [Validators.required]],
      expanded: [false],
      new: [isNewAbility],
    });
  }

  public sendAddedAbility(i: number): void {
    if (this.abilities.at(i).invalid) {
      validateAllFormFields(this.abilities.at(i) as FormGroup);

      return;
    }

    this.addedAbility.emit({
      data: this.abilities.at(i).value,
      index: this.abilities.at(i).get('id')?.value,
    });
  }
}
