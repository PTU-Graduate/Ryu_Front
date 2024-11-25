export interface BachelorUtilType {
  RSLT_CD: string;
  BACHELOR: BachelorItemType[][];
}

export interface BachelorItemType {
  CRE_SEQ: number;
  MEMB_ID: string;
  TIT: string;
  CONT: string;
  CRE_DATE: string;
}

let bachelorData: BachelorUtilType | null = null;

export function setBachelorData(data: BachelorUtilType | null) {
  bachelorData = data;
}

export function getBachelorData(): BachelorUtilType | null {
  return bachelorData;
}
