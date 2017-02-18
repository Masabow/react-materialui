import React, {PropTypes} from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'

import NameContainer from './NameContainer'
import VolumeContainer from './VolumeContainer'
import RaisedButton from 'material-ui/RaisedButton';

export default class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    handleClick() {

    }

    render() {
        return (
            <Card>
                <CardHeader
                 avatar = "gohan.jpg"
                >
                </CardHeader>
                <CardTitle title={<div><NameContainer name={this.props.name} onChangeName={this.props.onChangeName}/> </div>} />
            </Card>
        )
    }
}

CardContainer.propTypes = {
  name:PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired
}
