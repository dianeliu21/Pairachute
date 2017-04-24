import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadContacts } from '../../actions/contactsActions';

import ContactsTab from './ContactsTab'

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadContacts,
  }, dispatch);
}

const ContactsTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsTab)

export default ContactsTabContainer;
