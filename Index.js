import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardContainer from './CardContainer'
import Cards from './Cards'
import RaisedButton from 'material-ui/RaisedButton';
import AddItem from './AddItem';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducer'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
export default class Index extends React.Component {

  constructor() {
    super()
  }

render = () =>(
  <MuiThemeProvider>
    <div>
      <Cards />
    </div>
  </MuiThemeProvider>
);
}

ReactDOM.render(
    <Provider store={createStore(reducer)}>
      <Index/>
    </Provider>,
  document.getElementById('app')
);
