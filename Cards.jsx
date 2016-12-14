import { connect } from 'react-redux'
import { changeName } from './actions'
import CardList from './CardList'

const mapStateToProps = (state) => {
  return {
    items:state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeName: (id) => {
      console.log("change")
      dispatch(changeName(id))
    }
  }
}

const Cards = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)

export default Cards
