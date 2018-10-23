import React, { Component } from 'react';
import AppContainer from '@govuk-frederic/app-container';
import { Button } from 'govuk-react';
import { ToastConsumer } from 'react-toast-notifications';

import asyncComponent from './components/async-component';

import './styles.css'

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
            render: () => <div>
              <ExampleModule />
              <ToastConsumer>
                {({add}) => {
                  return <Button onClick={(e) => add(`Notified by ${e.target}`, {
                    appearance: 'success',
                    autoDismiss: true,
                  })}>
                    Notify me
                  </Button>
               }}
              </ToastConsumer>
            </div>
          },
          {
            name: 'example2',
            displayName: 'Example2',
            render: () => <ExampleModule2 />
          }
        ]} />
      </div>
    );
  }
}

export default App;
