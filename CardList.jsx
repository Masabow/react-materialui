import React, { PropTypes } from 'react'
import CardContainer from './CardContainer'

export default class CardList extends React.Component {

  //constructor(props) {
      //super(props);
  //}

  render(){
      const {items,onChangeName} = this.props
      return(
        <div>
        {items.map((item,index) =>
          <CardContainer {...item} key={index} onChangeName={onChangeName}  />
        )}
        </div>
      )
  }
}


CardList.propTypes = {
  items:PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onChangeName: PropTypes.func.isRequired
}
