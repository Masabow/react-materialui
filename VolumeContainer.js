import React from 'react';
import Slider from 'material-ui/Slider';
import FontIcon from 'material-ui/FontIcon'
import { white } from 'material-ui/styles/colors'

export default class VolumeContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      volume:100
    }
  }

  styles = {
    root: {
      display: 'flex',
      height: 124,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  };


  render = () => (
    <Slider value={this.state.volume} min={0} max={100} />
  );
}