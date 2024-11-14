type RegiBasicResultData = 'SALT' | 'MEMB_ID';

export interface RegiBasicResultDataType {
  SALT: string;
  MEMB_ID: string;
}

let regiBasicData: RegiBasicResultDataType | null = {
  SALT: '',
  MEMB_ID: '',
};

export function setSaltUserData(data: RegiBasicResultDataType | null) {
  regiBasicData = data;
}

export function getSaltUserData(): RegiBasicResultDataType | null {
  return regiBasicData;
}
