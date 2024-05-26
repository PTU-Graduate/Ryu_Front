import {serverConnector} from '../Api.config';
import {AxiosResponse} from 'axios';
import {LoginResultDataType} from '../../../utils/DataTableSet/LoginResultData';

export const regiApiCall = async (
  STD_NUM: string,
): Promise<LoginResultDataType | any | null> => {
  const endpoint = '/PTU/STDregister/';
  const data = {STD_NUM};

  try {
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      LoginResultDataType | any
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
