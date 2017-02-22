import * as types from './actionTypes';
import { Actions } from 'react-native-router-flux';
import fb from '../config/initializeFirebase';

var db = fb.database();

export function loadThreadList() {
  return async function(dispatch) {
    try {
      dispatch(loadThreadListAttempt());

      let uid = fb.auth().currentUser.uid
      var userThreadsRef = db.ref('/users/' + uid + '/threads')
      var threads = []

      userThreadsRef.on('value', async function(snapshot) {
        var userThreads = snapshot.val()
        for (var id in userThreads) {
          threadRefString = '/threads/' + id.toString()
          let info = await db.ref(threadRefString).once('value')
          if (info.val().title) {
            title = info.val().title
          } else {
            userids = Object.keys(info.val().users).filter((val) => {if (val!==uid) return val})
            names = []
            for (var i in userids) {
              let name = await db.ref('/users/' + userids[i] + '/name').once('value')
              names.push(name.val())
            }
            title=names.join(', ')
          }
          threads.push({
            last_message: info.val().last_message,
            title: title
          })
        }
        dispatch(loadThreadListSuccess(threads))
      })

    } catch(err) {
      console.log(err)
      dispatch(loadThreadListFailure())
    }
  }
}

function loadThreadListAttempt() {
  return {
    type: types.LOAD_THREAD_LIST_ATTEMPT,
  }
}

function loadThreadListSuccess(threads) {
  return {
    type: types.LOAD_THREAD_LIST_SUCCESS,
    threads
  }
}

function loadThreadListFailure() {
  return {
    type: types.LOAD_THREAD_LIST_FAILURE,
  }
}
