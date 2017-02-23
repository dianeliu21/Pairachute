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
            var names = []
            var users = {}
            var userids = Object.keys(info.val().users)
            for (var i in userids) {
              let name = await db.ref('/users/' + userids[i] + '/name').once('value')
              users[userids[i]] = name.val()
              if (userids[i] !== uid) names.push(name.val())
            }
            var title = names.join(', ')
          }
          threads.push({
            id: id,
            users: users,
            last_message: info.val().last_message,
            title: title,
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

export function loadMessages(thread_info) {
  return function(dispatch) {
    try {
      dispatch(loadMessagesAttempt())

      // get messages for this thread for initial load
      var last25MsgRef = db.ref('/messages/' + thread_info.id).limitToLast(8)
      last25MsgRef.on('value', function(snapshot) {
         var focused_thread = Object.assign({}, thread_info)
         focused_thread.messages = snapshot.val()
         dispatch(loadMessagesSuccess(focused_thread))
      })
    } catch(err) {
      console.log(err)
      dispatch(loadMessagesFailure())
    }
  }
}

export function sendMessage(message, sender_id, thread_id) {
  return async function(dispatch) {
    try {
      dispatch(sendMessageAttempt())
      var msgData = {
        message: message,
        sender_id: sender_id,
        timestamp: Date.now(),
      }

      var newMsgKey = db.ref('/messages').push().key
      var updates = {}
      updates['/messages/' + thread_id + '/' + newMsgKey] = msgData
      updates['/threads/' + thread_id + '/last_message'] = msgData

      let update_success = await db.ref().update(updates);
      dispatch(sendMessageSuccess())

    } catch(err) {
      console.log(err)
      dispatch(sendMessageFailure())
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

function loadMessagesAttempt() {
  return {
    type: types.LOAD_MESSAGES_ATTEMPT,
  }
}

function loadMessagesSuccess(thread_info) {
  Actions.message()
  return {
    type: types.LOAD_MESSAGES_SUCCESS,
    thread_info
  }
}

function loadMessagesFailure() {
  return {
    type: types.LOAD_MESSAGES_FAILURE,
  }
}

function sendMessageAttempt() {
  return {
    type: types.SEND_MESSAGE_ATTEMPT,
  }
}

function sendMessageSuccess(thread_info) {
  return {
    type: types.SEND_MESSAGE_SUCCESS,
  }
}

function sendMessageFailure() {
  return {
    type: types.SEND_MESSAGE_FAILURE,
  }
}
