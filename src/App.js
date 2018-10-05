import React, { Component } from 'react';
import AppContainer from '@govuk-frederic/app-container';

import asyncComponent from './components/async-component';

const ExampleModule = asyncComponent(() => import('@govuk-frederic/example-module'));
const ExampleModule2 = asyncComponent(() => import('@govuk-frederic/example-module-2'));

class App extends Component {
  render() {
    return (
      <div>
        <AppContainer modules={[
          {
            name: 'example',
            displayName: 'Example',
            render: () => <div><ExampleModule /></div>
          },
          {
            name: 'example2',
            displayName: 'Example2',
            render: () => <div><ExampleModule2 /></div>
          }
        ]} />
      </div>
    );
  }
}

export default App;
