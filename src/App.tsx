import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AppRoute } from 'AppRoute';
import { Home } from 'components/views/Home/Home';
import { SignIn } from 'components/views/SignIn/SignIn';
import { SignUp } from 'components/views/SignUp/SignUp';
import { CenteredLayout } from 'components/CenteredLayout/CenteredLayout';
import { Dashboard } from 'components/views/Dashboard/Dashboard';
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<CenteredLayout />}>
          <Route path={AppRoute.home} element={<Home />} />
          <Route path={AppRoute.signIn} element={<SignIn />} />
          <Route path={AppRoute.signUp} element={<SignUp />} />
        </Route>
        <Route
          path={AppRoute.dashboard}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};
