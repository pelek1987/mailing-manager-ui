import { ReactNode, /* useCallback */ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTokenContext } from 'context/TokenContext/useTokenContext';
import { AppRoute } from 'AppRoute';
// import axios from 'api/useAxios/axios';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { accessToken } = useTokenContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // const checkProfile = useCallback(async () => {
  //   try {
  //     await axios.get('/app/profile', {
  //       headers: {
  //         Authorziation: `Bearer ${accessToken}`,
  //       },
  //     });
  //   } catch (err) {
  //     navigate(AppRoute.signIn);
  //   }
  //   setIsLoading(false);
  // }, [accessToken]);

  useEffect(() => {
    if (!accessToken) {
      setIsLoading(false);
      navigate(AppRoute.signIn);
      // return;
    }
    // checkProfile();
  }, [accessToken, navigate /* , checkProfile */]);

  if (isLoading) {
    return null;
  }

  return <div>{children}</div>;
};
