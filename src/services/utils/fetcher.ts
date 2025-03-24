import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const fetch = async <
  Response = unknown,
  Args extends AxiosRequestConfig = AxiosRequestConfig
>(args: Args): Promise<Response> => {
  try {
    const res = await axios({ ...args });
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    throw { data: err.message };
  }
};
