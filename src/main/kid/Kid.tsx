import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AsyncComponent } from '../../LazyRoute';

export default class Kid extends React.Component {
  render() {
    return (
      <div>
        <>
          <Link to="/main/kid/home">Home</Link>
          <Link to="/main/kid/earn">Earn</Link>
          <Link to="/main/kid/rewards">Rewards</Link>
        </>
        <p>Kid</p>
        <Switch>
          <Route path="/main/kid/home" component={AsyncComponent(() => import('./home/Home'))} />
          <Route
            path="/main/kid/question/:standard/:question/:id"
            component={AsyncComponent(() => import('./question/Question'))}
          />
          <Route
            path="/main/kid/question/:standard/:question"
            component={AsyncComponent(() => import('./question/Question'))}
          />
          <Route path="/main/kid/earn" component={AsyncComponent(() => import('./earn/Earn'))} />
          <Route path="/main/kid/rewards" component={AsyncComponent(() => import('./rewards/Rewards'))} />
          <Route path="/main/kid/reports" component={AsyncComponent(() => import('./reports/Reports'))} />
          <Route path="/main/kid/friends" component={AsyncComponent(() => import('./friends/Friends'))} />
        </Switch>
      </div>
    );
  }
}
