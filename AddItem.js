import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from 'material-ui/IconButton';
export default class AddItem extends React.Component {
    handleClick = (e) => this.props.onAddItem("")
    render = () =>(
        <IconButton iconClassName="material-icons" onClick={this.handleClick}>add_circle_outline</IconButton>
    );
}