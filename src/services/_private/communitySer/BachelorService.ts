import {serverConnector} from '../Api.config';
import {AxiosResponse} from 'axios';
import {CommonResultDataType} from '../../../utils/DataTableSet/CommonResultData';
import {
  BachelorUtilType,
  setBachelorData,
} from '../../../utils/DataTableSet/communityUtil/BachelorUtil';

export const bachelorDataApi = async (
  page: number,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/bachelor';
  const data = {page};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      BachelorUtilType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      // RSLT_CD는 응답코드를 의미
      setBachelorData(result.data);
      return result.data;
    } else {
      console.log(result.data);
      return result.data;
    }
  } catch (error) {
    return '';
  }
};

export const bachelorAdd = async (
  MEMB_ID: string,
  TIT: string,
  CONT: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Bachelor/add';
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

export const bachelorUpdate = async (
  CRE_SEQ: number,
  TIT: string,
  CONT: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Bachelor/update';
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

export const bachelorDelete = async (
  CRE_SEQ: number,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Bachelor/delete';
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
