import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import ItemContainer from './ItemContainer'
import CardContainer from './CardContainer'
import Cards from './Cards'
import RaisedButton from 'material-ui/RaisedButton';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducer'

export default class Index extends React.Component {

  constructor() {
    super()
  }

render = () =>(
  <MuiThemeProvider>
      <Cards />
  </MuiThemeProvider>
);
}

ReactDOM.render(
    <Provider store={createStore(reducer)}>
      <Index/>
    </Provider>,
  document.getElementById('app')
);
