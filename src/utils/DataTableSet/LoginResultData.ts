type LoginResultData =
  | 'RSLT_CD'
  | 'STD_NUM'
  | 'DEPARTMENT_NAME'
  | 'NAME'
  | 'MEMB_ID'
  | 'CRE_CON'
  | 'EMAIL';

export interface LoginResultDataType {
  RSLT_CD: string;
  MEMB_ID: string;
  STD_NUM: string;
  EMAIL: string;
  CRE_CON: string;
  DEPARTMENT_NAME: string;
  NAME: string;
}

let loginResultData: LoginResultDataType | null = {
  RSLT_CD: '',
  MEMB_ID: '',
  STD_NUM: '',
  EMAIL: '',
  CRE_CON: '',
  DEPARTMENT_NAME: '',
  NAME: '',
};

export function setUserData(data: LoginResultDataType | null) {
  loginResultData = data;
}

export function getUserData(): LoginResultDataType | null {
  return loginResultData;
}
