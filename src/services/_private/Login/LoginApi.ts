import {serverConnector} from '../Api.config';
import {AxiosResponse} from 'axios';
export const Login = async (MEMB_ID: string, PASS: string) => {
  const endpoint = '/Login';
  const data = {
    MEMB_ID,
    PASS,
  };
  const result: AxiosResponse<any> | null = await serverConnector(
    endpoint,
    data,
  );
  if (result !== null && result.data.RSLT_CD === '00') {
    console.log('성공');
    console.log(result?.data);
  } else {
    console.log('실패');
    console.log(result?.data);
  }
};
