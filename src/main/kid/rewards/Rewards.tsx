import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { AsyncComponent } from '../../../LazyRoute';

export default class Rewards extends React.Component {
  render() {
    return (
      <div>
        <>
          <Link to="/main/kid/rewards/games">Games</Link>
          <Link to="/main/kid/rewards/badges">Badges</Link>
        </>
        <p>Rewards</p>
        <Switch>
          <Route path="/main/kid/rewards/games" component={AsyncComponent(() => import('./games/Games'))} />
          <Route path="/main/kid/rewards/games/:id" component={AsyncComponent(() => import('./games/Games'))} />

          <Route path="/main/kid/rewards/badges" component={AsyncComponent(() => import('./badges/Badges'))} />
          <Route path="/main/kid/rewards/badges/:id" component={AsyncComponent(() => import('./badges/Badges'))} />
        </Switch>
      </div>
    );
  }
}
