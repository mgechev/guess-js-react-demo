import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { AsyncComponent } from '../../LazyRoute';

export default class Parent extends React.Component {
  render() {
    return (
      <>
        <p>
          <Link to="/main/parent/settings">Settings</Link>
          <Link to="/main/parent/home">Home</Link>
          <Link to="/main/parent/faq">FAQ</Link>
          <Link to="/main/parent/verify">Verify</Link>
        </p>
        <p>Parent</p>
        <Switch>
          <Route path="/main/parent/settings" component={AsyncComponent(() => import('./settings/Settings'))} />
          <Route path="/main/parent/home" component={AsyncComponent(() => import('./home/Home'))} />
          <Route path="/main/parent/faq" component={AsyncComponent(() => import('./faq/Faq'))} />
          <Route path="/main/parent/verify" component={AsyncComponent(() => import('./verify/Verify'))} />
        </Switch>
      </>
    );
  }
}
