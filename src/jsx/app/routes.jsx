import { Route, Router } from 'react-router';
import { createHistory } from 'history';

import Blank from './routes/blank';

export default (withHistory, onUpdate) => {
  const history = createHistory();
  return (
    <Router history={history} onUpdate={onUpdate}>
      <Route path='/' component={Blank} />
    </Router>
  );
};
