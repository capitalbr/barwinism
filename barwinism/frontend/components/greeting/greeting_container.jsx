import { logout, clearErrors } from "../../actions/session_actions";
import { connect } from "react-redux";
import Greeting from "./greeting";

const mapStateToProps = (state) => {
  return({
    currentUser: state.entities.users[state.session.id]
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    logout: () => dispatch(logout()),
     clearErrors: () => dispatch(clearErrors())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);