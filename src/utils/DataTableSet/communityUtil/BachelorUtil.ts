export interface BachelorUtilType {
  RSLT_CD: string;
  BACHELOR: BachelorItemType[][];
}

interface BachelorItemType {
  CRE_SEQ: number;
  MEMB_ID: string;
  TIT: string;
  CONT: string;
  CRE_DATE: string;
}

let bachelorData: BachelorItemType | null = null;

export function setBachelorData(data: BachelorItemType | null) {
  bachelorData = data;
}

export function getBachelorData(): BachelorItemType | null {
  return bachelorData;
}
