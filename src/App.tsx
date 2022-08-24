import { Route, Routes } from 'react-router-dom';

import { AppRoute } from 'AppRoute';

export const App = () => {
  return (
    <Routes>
      <Route path={AppRoute.home} element={<>Hello form home page</>} />
    </Routes>
  );
};
