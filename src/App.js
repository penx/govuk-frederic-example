import React, { Component } from 'react';
import AppContainer from '@govuk-frederic/app-container';

class App extends Component {
  render() {
    return (
      <div>
        <AppContainer modules={[
          {
            example: {
              render: () => <div>hi</div>
            }
          }
        ]} />
      </div>
    );
  }
}

export default App;
