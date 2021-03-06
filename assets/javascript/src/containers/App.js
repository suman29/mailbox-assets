import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDealers } from '../actions/actions';
import { bindActionCreators } from 'redux';
import * as ParcelActions from '../actions/actions';

class App extends React.Component {

  componentDidMount() {
    this.props.actions.fetchDealers();
  }

  render() {
    return (
      <div>
      {this.props.children && React.cloneElement(this.props.children, {
        dealers: this.props.dealers,
        users: this.props.users,
        selectedUser: this.props.selectedUser,
        actions: this.props.actions,
      })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('**********', state);
  return {
    dealers: state.dealers.dealers,
    users: state.users.users,
    selectedUser: state.selectedUser.selectedUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ParcelActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

App.propTypes = {
  actions: PropTypes.object.isRequired,
  selectedUser: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  dealers: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};

