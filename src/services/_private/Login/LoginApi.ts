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
    if (result && result.data && result.data.RSLT_CD === '00') {
      setUserData(result.data);
      return result.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
