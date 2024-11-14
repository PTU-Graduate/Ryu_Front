import {serverConnector} from '../Api.config';
import {AxiosResponse} from 'axios';
import {CommonResultDataType} from '../../../utils/DataTableSet/CommonResultData';
import {
  EntranceUtilType,
  setEntranceData,
} from '../../../utils/DataTableSet/communityUtil/EntranceUtil';

export const entranceDataApi = async (
  page: number,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/entrance';
  const data = {page};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      EntranceUtilType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      // RSLT_CD는 응답코드를 의미
      setEntranceData(result.data);
      return result.data;
    } else {
      console.log(result.data);
      return result.data;
    }
  } catch (error) {
    return '';
  }
};

export const entranceAdd = async (
  MEMB_ID: string,
  TIT: string,
  CONT: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Entrance/add';
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

export const entranceUpdate = async (
  CRE_SEQ: number,
  TIT: string,
  CONT: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Entrance/update';
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

export const entranceDelete = async (
  CRE_SEQ: number,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Entrance/delete';
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
