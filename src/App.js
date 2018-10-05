import React, { Component } from 'react';
import ExampleModule from '@govuk-frederic/example-module';
import AppContainer from '@govuk-frederic/app-container';

class App extends Component {
  render() {
    return (
      <div>
        <AppContainer modules={[
          {
            example: {
              render: () => <div><ExampleModule /></div>
            }
          }
        ]} />
      </div>
    );
  }
}

export default App;
