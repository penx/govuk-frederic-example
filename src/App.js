import React, { Component } from 'react';
import AppContainer from '@govuk-frederic/app-container';
import { Button, H1 } from 'govuk-react';
import { ToastConsumer } from 'react-toast-notifications';
import { Link } from 'react-router-dom';

import asyncComponent from './components/async-component';

import './styles.css'

const ExampleModule = asyncComponent(() => import('@govuk-frederic/example-module'));
const ExampleModule2 = asyncComponent(() => import('@govuk-frederic/example-module-2'));

class App extends Component {
  render() {
    return (
      <div>
        <AppContainer root={<H1>Welcome to my app</H1>} modules={[
          {
            name: 'example',
            displayName: 'Example',
            render: () =>
              <ExampleModule>
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
                <Link to="/nowhere">Invalid Link</Link>
              </ExampleModule>
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
