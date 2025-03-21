import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderTitleService } from '@core/services/header-title.service';
import { Apollo, ApolloBase, QueryRef } from 'apollo-angular';
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
import { FormActions } from '@core/enums/form-actions.enum';
import {
  DELETE_ABILITY,
  DELETE_CAREER,
  DELETE_CERTIFICATION, DELETE_HOBBY,
  DELETE_RESUME,
  NEW_RESUME,
  RESUME_LIST,
  UPDATE_RESUME
} from '@core/graphql/queries/resume-queries';
import { CKEDITOR_GLOBAL_CONF } from '@core/config/ckeditor/global.conf';
import { GraphQLClients } from '@core/enums/graphql-clients.enum';
import { ICertificationData, ICertificationInterchange } from '@core/interfaces/certification.interface';

@Component({
  selector: 'resume-page',
  templateUrl: 'resume.component.html',
  styleUrls: ['resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public editor = ClassicEditor;
  public resumeEditTitle = 'New Resume';
  public resumeForm: FormGroup;
  public resumeListResult$: Observable<IResume[]> | null = null;
  postsQuery: QueryRef<any> | any = null;

  public config = CKEDITOR_GLOBAL_CONF;

  public selectedResumeCertifications: ICertificationData[] = [];
  public selectedResumeAbilities: IAbilityData[] = [];
  public selectedResumeCareers: ICareerData[] = [];
  public selectedResumeHobbies: IHobbyData[] = [];

  public updatedOrNewCertifications: Map<string, ICertificationData> = new Map();
  public updatedOrNewAbilities: Map<string, IAbilityData> = new Map();
  public updatedOrNewCareers: Map<string, ICareerData> = new Map();
  public updatedOrNewHobbies: Map<string, IHobbyData> = new Map();

  private formActionState = FormActions.CREATE;
  private resumeListResult: IResume[] = [];
  private apolloBase: ApolloBase;

  constructor(
    private apolloProvider: Apollo,
    private fb: FormBuilder,
    private headerTitle: HeaderTitleService
  ) {
    this.apolloBase = this.apolloProvider.use(GraphQLClients.MAIN);
    this.resumeForm = this.newResumeFormGroup();
  }

  ngOnInit(): void {
    this.headerTitle.setTitle({
      title: 'Resume list',
      description: 'Edit or set as default any resume',
    });

    this.postsQuery = this.apolloBase.watchQuery({
      query: RESUME_LIST,
    });

    this.resumeListResult$ = this.postsQuery.valueChanges.pipe(
      map((e: any) => {
        this.resumeListResult = e.data.resumeList;
        return e.data.resumeList;
      })
    );
  }

  public deleteResume(resumeId: string) {
    this.apolloBase
      .mutate({
        mutation: DELETE_RESUME,
        variables: {
          resumeId,
        },
      })
      .subscribe(
        () => {
          this.postsQuery.refetch();
          this.newResume();
        },
        (error) => {
          console.log('There was an error sending the query', error);
        }
      );
  }

  public editResume(index: number, resumeId: string) {
    this.formActionState = FormActions.UPDATE;
    this.resumeForm.patchValue(this.resumeListResult[index]);

    const careersOriginalCopy = this.resumeListResult[index].careers;
    this.selectedResumeCareers = careersOriginalCopy;
    careersOriginalCopy.forEach((career: ICareerData) =>
      this.updatedOrNewCareers.set(career.id, career)
    );

    const certificationsOriginalCopy = this.resumeListResult[index].certifications;
    this.selectedResumeCertifications = certificationsOriginalCopy;
    certificationsOriginalCopy.forEach((certification: ICertificationData) =>
      this.updatedOrNewCertifications.set(certification.id, certification)
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
    this.formActionState = FormActions.CREATE;
    this.resumeForm.reset();
    this.resumeForm.get('selected')?.setValue(false);
    this.resumeEditTitle = 'New Resume';

    this.selectedResumeCertifications = [];
    this.selectedResumeCareers = [];
    this.selectedResumeAbilities = [];
    this.selectedResumeHobbies = [];

    this.updatedOrNewCareers.clear();
    this.updatedOrNewAbilities.clear();
    this.updatedOrNewHobbies.clear();
    this.updatedOrNewCertifications.clear();
  }

  public receiveDeletedCareer(careerId: string): void {
    this.apolloBase.mutate({mutation: DELETE_CAREER, variables: {careerId}}).subscribe(result => {
      window.alert('Career deleted');
      this.updatedOrNewCareers.delete(careerId);
    });
  }

  public receiveDeletedAbility(abilityId: string): void {
    this.apolloBase.mutate({mutation: DELETE_ABILITY, variables: {abilityId}}).subscribe(result => {
      window.alert('Ability deleted');
      this.updatedOrNewAbilities.delete(abilityId);
    });
  }

  public receiveDeletedHobby(hobbyId: string): void {
    this.apolloBase.mutate({mutation: DELETE_HOBBY, variables: {hobbyId}}).subscribe(result => {
      window.alert('Career deleted');
      this.updatedOrNewHobbies.delete(hobbyId);
    });
  }

  public receiveAddedCareer({ index, data }: ICareerInterchange): void {
    this.updatedOrNewCareers.set(index, data);
  }

  public receiveAddedCertification({index, data}: ICertificationInterchange): void {
    this.updatedOrNewCertifications.set(index, data);
  }

  receiveDeletedCertification(certificationId: string): void {
    this.apolloBase.mutate({mutation: DELETE_CERTIFICATION, variables: {certificationId}}).subscribe(result => {
      window.alert('Certification deleted');
    this.updatedOrNewCertifications.delete(certificationId);
    });
  }

  public receiveAddedAbility({ index, data }: IAbilityInterchange): void {
    this.updatedOrNewAbilities.set(index, data);
  }

  public receiveAddedHobby({ index, data }: IHobbyInterchange): void {
    this.updatedOrNewHobbies.set(index, data);
  }

  public saveResume(): void {
    if (this.resumeForm.invalid) {
      validateAllFormFields(this.resumeForm);
      return;
    }

    const {
      id,
      firstName,
      lastName,
      state,
      city,
      country,
      age,
      profileImage,
      about,
      selected,
      hobbies,
      careers,
      abilities,
      certifications
    }: IResume = {
      ...this.resumeForm.value,
      careers: [...this.updatedOrNewCareers.values()],
      abilities: [...this.updatedOrNewAbilities.values()],
      hobbies: [...this.updatedOrNewHobbies.values()],
      certifications: [...this.updatedOrNewCertifications.values()]
    };

    this.apolloBase
      .mutate({
        mutation:
          this.formActionState === FormActions.CREATE
            ? NEW_RESUME
            : UPDATE_RESUME,
        variables: {
          id,
          firstName,
          lastName,
          state,
          city,
          country,
          age,
          profileImage,
          about,
          selected,
          hobbies,
          careers,
          abilities,
          certifications
        },
      })
      .subscribe(
        () => {
          this.postsQuery.refetch();
          this.newResume();
        },
        (error) => {
          console.log('There was an error sending the query', error);
        }
      );
  }

  private newResumeFormGroup(): FormGroup {
    return this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      age: ['', [Validators.required]],
      profileImage: ['', [Validators.required]],
      about: ['', [Validators.required]],
      selected: [false],
    });
  }
}
