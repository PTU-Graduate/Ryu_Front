import {serverConnector} from '../Api.config';
import {AxiosResponse} from 'axios';
import {LoginResultDataType} from '../../../utils/DataTableSet/LoginResultData';
import {setUserData} from '../../../utils/DataTableSet/LoginResultData';

export const loginApiCall = async (
  MEMB_ID: string,
  PASS: string,
): Promise<LoginResultDataType | any | null> => {
  const endpoint = '/PTU/Login';
  const data = {MEMB_ID, PASS};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      LoginResultDataType | any
    >;
    console.log(data);
    if (result && result.data && result.data.RSLT_CD === '00') {
      // RSLT_CD는 응답코드를 의미
      setUserData(result.data);
      console.log(result.data);
      return result.data;
    } else {
      console.log(result.data);
      return null;
    }
  } catch (error) {
    console.log('0');
    return null;
  }
};

export const saltCall = async (
  MEMB_ID: string,
): Promise<LoginResultDataType | any | null> => {
  const endpoint = '/getSalt';
  const data = {MEMB_ID};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      LoginResultDataType | any
    >;
    console.log(data);
    if (result && result.data && result.data.RSLT_CD === '00') {
      // RSLT_CD는 응답코드를 의미
      console.log(result.data);
      return result.data;
    } else {
      console.log(result.data);
      return null;
    }
  } catch (error) {
    console.log('0');
    return null;
  }
};
