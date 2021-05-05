import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderTitleService } from '@core/services/header-title.service';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  ICareerData,
  ICareerInterchange,
} from '@core/interfaces/career.interface';
import {
  IAbilityData,
  IAbilityInterchange,
} from '@core/interfaces/ability.interface';
import {
  IHobbyData,
  IHobbyInterchange,
} from '@core/interfaces/hobby.interface';
import { IResume } from '@core/interfaces/resume.interface';
import { validateAllFormFields } from '@core/functions/validate-all-form-fields';

@Component({
  selector: 'resume-page',
  templateUrl: 'resume.component.html',
  styleUrls: ['resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public editor = ClassicEditor;
  public resumeEditTitle = 'New Resume';
  public resumeForm: FormGroup;
  public result: Observable<any> | null = null;

  public selectedResumeAbilities: IAbilityData[] = [];
  public selectedResumeCareers: ICareerData[] = [];
  public selectedResumeHobbies: IHobbyData[] = [];

  public updatedOrNewAbilities: Map<string, IAbilityData> = new Map();
  public updatedOrNewCareers: Map<string, ICareerData> = new Map();
  public updatedOrNewHobbies: Map<string, IHobbyData> = new Map();

  private resumeListResult: IResume[] = [];

  constructor(
    private apollo: Apollo,
    private fb: FormBuilder,
    private headerTitle: HeaderTitleService
  ) {
    this.resumeForm = this.newResumeFormGroup();
  }

  ngOnInit(): void {
    this.headerTitle.setTitle({
      title: 'Resume list',
      description: 'Edit or set as default any resume',
    });

    this.result = this.apollo
      .watchQuery({
        query,
      })
      .valueChanges.pipe(
        map((e: any) => {
          this.resumeListResult = e.data.resumeList;
          return e.data.resumeList;
        })
      );
  }

  public editResume(index: number, resumeId: number) {
    this.resumeForm.patchValue(this.resumeListResult[index]);

    const careersOriginalCopy = this.resumeListResult[index].careers;
    this.selectedResumeCareers = careersOriginalCopy;
    careersOriginalCopy.forEach((career: ICareerData) =>
      this.updatedOrNewCareers.set(career.id, career)
    );

    const abilitiesOriginalCopy = this.resumeListResult[index].abilities;
    this.selectedResumeAbilities = abilitiesOriginalCopy;
    abilitiesOriginalCopy.forEach((ability: IAbilityData) =>
      this.updatedOrNewAbilities.set(ability.id, ability)
    );

    const hobbiesOriginalCopy = this.resumeListResult[index].hobbies;
    this.selectedResumeHobbies = hobbiesOriginalCopy;
    hobbiesOriginalCopy.forEach((hobby: IHobbyData) =>
      this.updatedOrNewHobbies.set(hobby.id, hobby)
    );

    this.resumeEditTitle = `Editing: Resume ${resumeId}`;
  }

  public newResume(): void {
    this.resumeForm.reset();
    this.resumeEditTitle = 'New Resume';

    this.selectedResumeCareers = [];
    this.selectedResumeAbilities = [];
    this.selectedResumeHobbies = [];

    this.updatedOrNewCareers.clear();
    this.updatedOrNewAbilities.clear();
    this.updatedOrNewHobbies.clear();
  }

  public reciveDeletedCareer(key: string): void {
    this.updatedOrNewCareers.delete(key);
  }

  public reciveDeletedAbility(key: string): void {
    this.updatedOrNewAbilities.delete(key);
  }

  public reciveDeletedHobby(key: string): void {
    this.updatedOrNewHobbies.delete(key);
  }

  public reciveAddedCareer({ index, data }: ICareerInterchange): void {
    this.updatedOrNewCareers.set(index, data);
  }

  public reciveAddedAbility({ index, data }: IAbilityInterchange): void {
    this.updatedOrNewAbilities.set(index, data);
  }

  public reciveAddedHobby({ index, data }: IHobbyInterchange): void {
    this.updatedOrNewHobbies.set(index, data);
  }

  public saveResume(): void {
    if (this.resumeForm.invalid) {
      validateAllFormFields(this.resumeForm);
      return;
    }

    const dataToSave: IResume = {
      ...this.resumeForm.value,
      careers: [...this.updatedOrNewCareers.values()],
      abilities: [...this.updatedOrNewAbilities.values()],
      hobbies: [...this.updatedOrNewHobbies.values()],
    };

    console.log(dataToSave);
  }

  private newResumeFormGroup(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      state: [''],
      city: [''],
      country: [''],
      age: ['', [Validators.required]],
      resumeFileUrl: ['', [Validators.required]],
      profileImage: ['', [Validators.required]],
      about: ['', [Validators.required]],
      selected: [false, [Validators.required]],
    });
  }
}

const query = gql`
  {
    resumeList {
      id
      firstName
      lastName
      about
      age
      city
      country
      profileImage
      resumeFileUrl
      selected
      state
      abilities {
        id
        abilityName
        percent
        logo
      }
      careers {
        companyName
        country
        description
        id
        state
        jobTitle
        city
        startDate
        endDate
      }
      hobbies {
        id
        description
        name
      }
    }
  }
`;
