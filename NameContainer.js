import React from 'react';
import { white } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import FontIcon from 'material-ui/FontIcon'
import Slider from 'material-ui/Slider';

export default class NameContainer extends React.Component {

    styles = {
        input: {
            float: 'left'
        },
        date: {
            float: 'left'
        }
    }

    constructor(props) {
        super(props);
        console.log(this.props.onChangeName)

    }

    handleChange = (event) => this.props.onChangeName(event.target.value)

    render = () => (
        <div>
            <div style={this.styles.input}><TextField onChange={this.handleChange} defaultValue={this.props.name} id='a' /></div>
            <div style={this.styles.date}>
                <span style={{ float: 'left' }}>
                    <FontIcon className="material-icons" >today</FontIcon>
                </span>
                <span style={{ float: 'right' }}>
                    <DatePicker id='a' defaultDate={this.props.lastDate} />
                </span>
            </div>
            <div style={{ clear: 'both' }} />
        </div>
    )
};
