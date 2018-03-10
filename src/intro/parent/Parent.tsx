import * as React from 'react';
import { Switch, Route } from 'react-router';
import { AsyncComponent } from '../../LazyRoute';
import { Link } from 'react-router-dom';

export default class Parent extends React.Component {
  render() {
    return (
      <>
        <>
          <Link to="/intro/parent/info">Info</Link>
          <Link to="/intro/parent/reward">Reward</Link>
          <Link to="/intro/parent/personalize">Personalize</Link>
        </>
        <p>Parent</p>
        <Switch>
          <Route path="/intro/parent/info" component={AsyncComponent(() => import('./info/Info'))} />
          <Route
            path="/intro/parent/personalize"
            component={AsyncComponent(() => import('./personalize/Personalize'))}
          />
          <Route path="/intro/parent/reward" component={AsyncComponent(() => import('./reward/Reward'))} />
          <Route path="/intro/parent/reward/:id" component={AsyncComponent(() => import('./reward/Reward'))} />
        </Switch>
      </>
    );
  }
}
