export interface ScholarUtilType {
  RSLT_CD: string;
  SCHOLAR: ScholarItemType[][];
}

interface ScholarItemType {
  CRE_SEQ: number;
  MEMB_ID: string;
  TIT: string;
  CONT: string;
  CRE_DATE: string;
}

let scholarData: ScholarUtilType | null = null;

export function setScholarData(data: ScholarUtilType | null) {
  scholarData = data;
}

export function getScholarData(): ScholarUtilType | null {
  return scholarData;
}
