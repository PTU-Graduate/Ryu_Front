import {serverConnector} from '../Api.config';
import {AxiosResponse} from 'axios';
import {CommonResultDataType} from '../../../utils/DataTableSet/CommonResultData';
import {
  NoticeUtilType,
  setNoticeData,
} from '../../../utils/DataTableSet/communityUtil/NoticeUtil';

export const noticeDataApi = async (
  page: number,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/notices';
  const data = {page};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      NoticeUtilType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      // RSLT_CD는 응답코드를 의미
      console.log(result.data);
      setNoticeData(result.data);
      return result.data;
    } else {
      console.log(result.data);
      return result.data;
    }
  } catch (error) {
    return '';
  }
};

export const noticeAdd = async (
  MEMB_ID: string,
  TIT: string,
  CONT: string,
  IMAGE: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Notice/add';
  const data = {MEMB_ID, TIT, CONT, IMAGE};
  try {
    console.log(data);
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      CommonResultDataType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      console.log(result.data);
      return result.data;
    } else {
      console.log(result.data);
      return result.data;
    }
  } catch (error) {
    return '';
  }
};

export const noticeUpdate = async (
  CRE_SEQ: number,
  TIT: string,
  CONT: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Notice/update';
  const data = {CRE_SEQ, TIT, CONT};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      CommonResultDataType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      // RSLT_CD는 응답코드를 의미
      return result.data;
    } else {
      return result.data;
    }
  } catch (error) {
    return '';
  }
};

export const noticeDelete = async (
  CRE_SEQ: number,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Notice/delete';
  const data = {CRE_SEQ};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      CommonResultDataType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      // RSLT_CD는 응답코드를 의미
      return result.data;
    } else {
      return result.data;
    }
  } catch (error) {
    return '';
  }
};
