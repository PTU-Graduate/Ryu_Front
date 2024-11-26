type RegiBasicResultData = 'STD_DEP_CD';

export interface RegiSTD_DEP_CDDataType {
  STD_DEP_CD: string;
}

let regiBasicData: RegiSTD_DEP_CDDataType | null = {
  STD_DEP_CD: '',
};

export function setSTDData(data: RegiSTD_DEP_CDDataType | null) {
  regiBasicData = data;
}

export function getSTDData(): RegiSTD_DEP_CDDataType | null {
  return regiBasicData;
}
