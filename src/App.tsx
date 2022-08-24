import { Route, Routes } from 'react-router-dom';

import { AppRoute } from 'AppRoute';
import { Home } from 'components/views/Home/Home';
import { SignIn } from 'components/views/SignIn/SignIn';
import { SignUp } from 'components/views/SignUp/SignUp';

export const App = () => {
  return (
    <Routes>
      <Route path={AppRoute.home} element={<Home />} />
      <Route path={AppRoute.signIn} element={<SignIn />} />\
      <Route path={AppRoute.signUp} element={<SignUp />} />
    </Routes>
  );
};
