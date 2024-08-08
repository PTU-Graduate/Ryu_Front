type LoginResultData = 'RSLT_CD' | 'STD_NUM' | 'STD_DEP_CD' | 'NAME' | 'GRADE';

export interface LoginResultDataType {
  RSLT_CD: string;
  MEMB_ID: string;
  STD_NUM: string;
  EMAIL: string;
  CRE_CON: string;
  STD_DEP_CD: string;
  NAME: string;
}

let loginResultData: LoginResultDataType | null = {
  RSLT_CD: '',
  MEMB_ID: '',
  STD_NUM: '',
  EMAIL: '',
  CRE_CON: '',
  STD_DEP_CD: '',
  NAME: '',
};

export function setUserData(data: LoginResultDataType | null) {
  loginResultData = data;
}

export function getUserData(): LoginResultDataType | null {
  return loginResultData;
}
