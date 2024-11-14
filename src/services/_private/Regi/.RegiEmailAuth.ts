import {serverConnector} from '../Api.config';
import {AxiosResponse} from 'axios';
import {CommonResultDataType} from '../../../utils/DataTableSet/CommonResultData';

export const EmailAuthCodeSend = async (
  MEMB_ID: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Auth/CodeSend';
  const data = {MEMB_ID};

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

export const EmailAuthCodeVerify = async (
  MEMB_ID: string,
  CRE_CODE: string,
): Promise<CommonResultDataType | any | null> => {
  const endpoint = '/PTU/Auth/VerifyCode';
  const data = {MEMB_ID, CRE_CODE};

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
