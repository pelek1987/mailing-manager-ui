import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AppRoute } from 'AppRoute';
import { Home } from 'components/views/Home/Home';
import { SignIn } from 'components/views/SignIn/SignIn';
import { SignUp } from 'components/views/SignUp/SignUp';
import { CenteredLayout } from 'components/CenteredLayout/CenteredLayout';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<CenteredLayout />}>
          <Route path={AppRoute.home} element={<Home />} />
          <Route path={AppRoute.signIn} element={<SignIn />} />
          <Route path={AppRoute.signUp} element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
};
