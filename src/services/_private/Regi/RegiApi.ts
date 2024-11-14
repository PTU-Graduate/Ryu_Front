import {serverConnector} from '../Api.config';
import {AxiosResponse} from 'axios';
import {CommonResultDataType} from '../../../utils/DataTableSet/CommonResultData';
import {setSaltUserData} from '../../../utils/DataTableSet/RegiData/RegiBasicDataSaveResult';

export const regiHakbunApiCall = async (
  STD_NUM: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Register/StdNum';
  const data = {STD_NUM};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      CommonResultDataType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      // RSLT_CD는 응답코드를 의미
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

export const regiIDApiCall = async (
  STD_NUM: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Register/ID';
  const data = {STD_NUM};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      CommonResultDataType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      // RSLT_CD는 응답코드를 의미
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

export const regiBasicDataSave = async (
  STD_DEP_CD: string,
  NAME: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Register/basic-info-save';
  const data = {STD_DEP_CD, NAME};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      CommonResultDataType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      console.log(result.data);
      setSaltUserData(result.data);
      return result.data;
    } else {
      return result.data;
    }
  } catch (error) {
    return '';
  }
};

export const mailCheck = async (
  EMAIL: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Register/Mail';
  const data = {EMAIL};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      CommonResultDataType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      console.log(result.data);
      return result.data;
    } else {
      return result.data;
    }
  } catch (error) {
    return '';
  }
};

export const stdInfoSave = async (
  PASS: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Register/StdInfo';
  const data = {PASS};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      CommonResultDataType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      console.log(result.data);
      return result.data;
    } else {
      return result.data;
    }
  } catch (error) {
    return '';
  }
};
