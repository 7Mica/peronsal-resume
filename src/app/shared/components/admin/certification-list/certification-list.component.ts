import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeInOutTransition, scaleAndOpaque } from '@core/animations/common-animations';
import { FormGroup } from '@angular/forms';
import { ICertificationData, ICertificationInterchange } from '@core/interfaces/certification.interface';

@Component({
  selector: 'admin-certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss'],
  animations: [
    trigger('collapse', fadeInOutTransition),
    trigger('certificationAction', scaleAndOpaque),
  ],
})
export class CertificationListComponent {
  @Input()
  public certificationList: ICertificationData[] = [];

  @Output()
  public addedCertification = new EventEmitter<ICertificationInterchange>();

  @Output()
  public removedCertification = new EventEmitter<string>();

  public certificationForm: FormGroup;
  public isBeingDragged = { index: 0, displayed: true };
}
