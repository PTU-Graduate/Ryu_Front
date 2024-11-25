export interface NoticeUtilType {
  RSLT_CD: string;
  NOTICES: NoticeItemType[][];
}

export interface NoticeItemType {
  CRE_SEQ: number;
  MEMB_ID: string;
  TIT: string;
  CONT: string;
  CRE_DATE: string;
  IMG_CD: string;
}

let noticeData: NoticeUtilType | null = null;

export function setNoticeData(data: NoticeUtilType | null) {
  noticeData = data;
}

export function getNoticeData(): NoticeUtilType | null {
  return noticeData;
}
