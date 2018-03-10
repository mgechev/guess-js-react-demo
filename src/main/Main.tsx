import * as React from 'react';
import { Switch, Route } from 'react-router';
import { AsyncComponent } from '../LazyRoute';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
  render() {
    return (
      <>
        <>
          <Link to="/main/kid">Kid</Link>
          <Link to="/main/parent">Parent</Link>
        </>
        <p>Main</p>
        <Switch>
          <Route path="/main/kid" component={AsyncComponent(() => import('./kid/Kid'))} />
          <Route path="/main/parent" component={AsyncComponent(() => import('./parent/Parent'))} />
        </Switch>
      </>
    );
  }
}
