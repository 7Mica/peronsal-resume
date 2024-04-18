import { CertificationStatusEnum } from '@core/enums/certification-status.enum';

export interface ICertificationData {
  id: string;
  expanded?: boolean;
  new?: boolean;
  certificationUrl: string;
  certificationImageUrl: string;
  certificationDescription: string;
  certificationCode: string;
  status: CertificationStatusEnum;
}

export interface ICertificationInterchange {
  index: string;
  data: ICertificationData;
}
