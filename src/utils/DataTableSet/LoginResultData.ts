type LoginResultData = 'RSLT_CD' | 'STD_NUM' | 'STD_DEP_CD' | 'NAME' | 'GRADE';

export interface LoginResultDataType {
  RSLT_CD: string;
  STD_NUM: string;
  STD_DEP_CD: string;
  NAME: string;
  GRADE: string;
}

let loginResultData: LoginResultDataType | null = {
  RSLT_CD: '',
  STD_NUM: '',
  STD_DEP_CD: '',
  NAME: '',
  GRADE: '',
};

export function setUserData(data: LoginResultDataType | null) {
  loginResultData = data;
}

export function getUserData(): LoginResultDataType | null {
  return loginResultData;
}
