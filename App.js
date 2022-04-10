import * as React from 'react';
import Splash from './screens/splash';
import database from './database';
import * as logger from "./logger";

export default class App extends React.Component {
  render() {
    return <Splash />
  }
}
