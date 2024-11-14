export interface EntranceUtilType {
  RSLT_CD: string;
  ENTRANCE: EntranceItemType[][];
}

interface EntranceItemType {
  CRE_SEQ: number;
  MEMB_ID: string;
  TIT: string;
  CONT: string;
  CRE_DATE: string;
}

let entranceData: EntranceUtilType | null = null;

export function setEntranceData(data: EntranceUtilType | null) {
  entranceData = data;
}

export function getEntranceData(): EntranceUtilType | null {
  return entranceData;
}
