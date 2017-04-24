import * as types from './actionTypes';
import { Actions } from 'react-native-router-flux';
import fb from '../config/initializeFirebase';

var db = fb.database();

export function loadContacts() {
  return async function(dispatch) {
    try {
      dispatch(loadContactsAttempt())

      let uid = fb.auth().currentUser.uid
      var userContactsRef = db.ref('/users/' + uid + '/contacts/')
      var contacts = []

      userContactsRef.on('value', async function(snapshot) {
        var contactsInfo = snapshot.val()
        if (contactsInfo != null) {
          for (var id in contactsInfo) {
            var contactRefString = '/users/' + id.toString()
            let userInfo = await db.ref(contactRefString).once('value')
            contacts.push({
              uid: id,
              first_name: userInfo.val().first_name,
              last_name: userInfo.val().last_name,
            })
          }
        }
        dispatch(loadContactsSuccess(contacts))
      })
    } catch(error) {
      console.log(error)
      dispatch(loadContactsFailure())
    }
  }
}

function loadContactsAttempt() {
  return {
    type: types.LOAD_CONTACTS_ATTEMPT,
  }
}

function loadContactsSuccess(contacts) {
  return {
    type: types.LOAD_CONTACTS_SUCCESS,
    contacts
  }
}

function loadContactsFailure() {
  return {
    type: types.LOAD_CONTACTS_FAILURE,
  }
}
