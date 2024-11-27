import {serverConnector} from '../Api.config';
import {AxiosResponse} from 'axios';
import {CommonResultDataType} from '../../../utils/DataTableSet/CommonResultData';
import {
  ScholarUtilType,
  setScholarData,
} from '../../../utils/DataTableSet/communityUtil/ScholarUtil';

export const scholarDataApi = async (
  page: number,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/scholar';
  const data = {page};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      ScholarUtilType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      // RSLT_CD는 응답코드를 의미
      setScholarData(result.data);
      return result.data;
    } else {
      console.log(result.data);
      return result.data;
    }
  } catch (error) {
    return '';
  }
};

export const scholarAdd = async (
  MEMB_ID: string,
  TIT: string,
  CONT: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Schorolship/add';
  const data = {MEMB_ID, TIT, CONT};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      CommonResultDataType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      return result.data;
    } else {
      return result.data;
    }
  } catch (error) {
    return '';
  }
};

export const scholarUpdate = async (
  CRE_SEQ: number,
  TIT: string,
  CONT: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Schorolship/update';
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

export const scholarDelete = async (
  CRE_SEQ: number,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Schorolship/delete';
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
