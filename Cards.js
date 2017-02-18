import { connect } from 'react-redux'
import { changeName,addItem} from './actions'
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
    },
    onAddItem: (text) => {
      dispatch(addItem(text));
    } 
  }
}


const Cards = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)

export default Cards
