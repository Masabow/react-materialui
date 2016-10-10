import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
   <Tabs>
    <Tab label="Item One" value="one">
      <div>
        <h2>Tab One</h2>
      </div>
    </Tab>
    <Tab label="Item Two" value="two">
      <div>
        <h2>Tab Two</h2>
      </div>
    </Tab>
    <Tab label="Item three" value="three">
      <div>
        <h2>Tab Three</h2>
      </div>
    </Tab>
  </Tabs>
    );
  }
}