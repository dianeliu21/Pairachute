import * as AuthActions from './authActions';
import * as MessagesActions from './messagesActions';
import * as SettingsActions from './settingsActions';

export const ActionCreators = Object.assign({},
  AuthActions,
  MessagesActions,
  SettingsActions,
);
