import { useMemo } from 'react';
import axios from 'axios';

import { useTokenContext } from 'context/TokenContext/useTokenContext';

export const useAxios = () => {
  const { accessToken } = useTokenContext();

  const axiosClient = useMemo(
    () =>
      axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    [accessToken],
  );

  return axiosClient;
};

export const { isAxiosError } = axios;
