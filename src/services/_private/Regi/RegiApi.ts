import {serverConnector} from '../Api.config';
import {AxiosResponse} from 'axios';
import {LoginResultDataType} from '../../../utils/DataTableSet/LoginResultData';

export const regiApiCall = async (
  STD_NUM: string,
): Promise<LoginResultDataType | any | null> => {
  const endpoint = '/PTU/STDregister';
  const data = {STD_NUM};

  try {
    console.log('Calling API with STD_NUM:', STD_NUM);
    const result = (await serverConnector(endpoint, data)) as AxiosResponse<
      LoginResultDataType | any
    >;
    if (result && result.data && result.data.RSLT_CD === '00') {
      return result.data;
    } else {
      return result.data;
    }
  } catch (error) {
    return null;
  }
};
