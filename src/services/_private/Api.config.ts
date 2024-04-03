import axios, {AxiosResponse} from 'axios';

const SERVER_URL = 'http://89.168.40.124:8080';

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
});

export const serverConnector = async (
  endpoint: string,
  data?: any,
): Promise<AxiosResponse<any> | null> => {
  try {
    const response: AxiosResponse<any> = await axiosInstance.post(
      endpoint,
      data,
    );

    if (response.status === 200) {
      console.log(response.data);
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
